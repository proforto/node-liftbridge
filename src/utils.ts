import { URL } from 'url';
import { backOff, IBackOffOptions } from 'exponential-backoff';
import { JitterTypes } from 'exponential-backoff/dist/options';
import { Client as GRPCClient, connectivityState as GRPCConnectivityState } from 'grpc';

/**
 * Randomly shuffles an array.
 *
 * Simple implementation of Durstenfeld shuffle,
 * which is a computer-ready implementation of the [Fisher-Yates shuffle](https://wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm).
 *
 * @param array Array of items to shuffle.
 * @returns Copy of original array in shuffled order.
 * @hidden
 */
/* istanbul ignore next */
export function shuffleArray<T>(array: T[]): T[] {
    const arrayCopy = array.slice();

    for (let i = arrayCopy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }

    return arrayCopy;
}

/**
 * Execute the `Promise` wrapped inside a function with retry, exponential backoff & [jitter](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/).
 * Defaults to 5 retries, full jitter, backoff multiple of 1.5 and a delay interval of 100 milliseconds.
 *
 * @param call Function returning a `Promise` that you want to retry.
 * @param retryOptions Retry & exponential backoff options (has own defaults - read source).
 * @returns A Promise that settles after all the retries are done.
 * @hidden
 */
/* istanbul ignore next */
export function faultTolerantCall<T>(call: () => Promise<T>, retryOptions?: Partial<IBackOffOptions>): Promise<T> {
    const retryDefaults: Partial<IBackOffOptions> = {
        delayFirstAttempt: false,
        numOfAttempts: 5,
        jitter: JitterTypes.Full,
        startingDelay: 100,
        timeMultiple: 1.5,
    };
    return backOff(call, Object.assign(retryDefaults, retryOptions || {}));
}

/**
 * Construct an address of the form <host>:<port>
 *
 * @param host Hostname.
 * @param port Port.
 * @returns Constructed address.
 * @hidden
 */
export function constructAddress(host: string, port: number): string {
    return `${host}:${port}`;
}

/**
 * Get a deadline timestamp
 */
export function getDeadline(timeout: number = 5000) {
    return new Date().getTime() + timeout;
}

/**
 * Get the address of a GRPC client
 * @param client GRPC Client
 * @returns string Address (host:port)
 */
export function getGrpcClientAddress(client: GRPCClient): string {
    const channel = client.getChannel();
    return channel.getTarget();
}

/**
 * Get the connectionstate for a GRPC client
 * @param client GRPC Client
 * @param tryToConnect Boolean whether to connect when returning current state
 * @returns GRPCConnectivityState
 */
export function getGrpcClientConnectivityState(client: GRPCClient, tryToConnect: boolean = false): GRPCConnectivityState {
    try {
        const channel = client.getChannel();
        return channel.getConnectivityState(tryToConnect);
    } catch (error) {
        console.warn(`WARNING cannot get state of client connected to address ${getGrpcClientAddress(client)}. Returning state = SHUTDOWN`, error);
        return GRPCConnectivityState.SHUTDOWN;
    }
}

/**
 * Make sure all addresses are fully specified URLs
 */
export function normalizeAddresses(address: string[] | string): string[] {
    const addresses = Array.isArray(address) ? address : [address];
    const fullAddresses = addresses.map(addr => {
        const addrWithProtocol = addr.includes('://') ? addr : `http://${addr}`;
        const url = new URL(addrWithProtocol);
        if (!url.protocol) url.protocol = 'http';
        if (!url.host) url.host = 'localhost';
        if (!url.port) url.port = '9292';

        return url.href;
    });

    // Remove duplicate addresses
    return [...new Set(fullAddresses)];
}
