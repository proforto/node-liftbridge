import hyperId from 'hyperid';
import { AckPolicy, AckPolicyMap, Message } from '../grpc/generated/api_pb';
import { BuiltinPartitioners, PartitionerLike } from './partition';

export { AckPolicy } from '../grpc/generated/api_pb';

const envelopeCookie = Buffer.from('LIFT');
const envelopeCookieLength = envelopeCookie.length;

interface ILiftbridgeMessageHeader {
    [key: string]: string;
}

export interface ILiftbridgeMessage {
    subject?: string;
    /**
     * Key to set on the Message. If Liftbridge has stream compaction enabled,
	 * the stream will retain only the last value for each key.
     */
    key?: Uint8Array | string | null;
    value: Uint8Array | string;
    /**
     * `correlationId` sets the identifier used to correlate an ack with the
	 * published message.
     *
     * Defaults to a unique ID generated by [`hyperid`](https://github.com/mcollina/hyperid/blob/master/README.md).
     */
    correlationId?: string;
    /**
     * `headers` are key-value pairs to set on the Message.
     */
    headers?: ILiftbridgeMessageHeader;
    /**
     * `ackInbox` sets the NATS subject Liftbridge should publish the message ack
	 * to. If it's not set, Liftbridge will not send an ack.
     */
    ackInbox?: string;
    /**
     * `ackPolicy` controls the behavior of message acks sent by the server. By
	 * default, Liftbridge will send an ack when the stream leader has written
	 * the message to its write-ahead log.
     */
    ackPolicy?: AckPolicyMap[keyof AckPolicyMap];
    /**
     * `partition` specifies the stream partition to publish the message to. If
	 * this is set, any `partitioner` will not be used. This is a pointer to
	 * allow distinguishing between undefined and 0.
     */
    partition?: number | undefined;
    /**
     * `partitionStrategy` specifies the strategy for mapping a message to a
     * stream partition.
     */
    partitionStrategy?: keyof BuiltinPartitioners | PartitionerLike | undefined;
}

export default class LiftbridgeMessage extends Message {
    public partition: number | undefined;

    public partitionStrategy: keyof BuiltinPartitioners | PartitionerLike | undefined;

    /**
     * Creates a Message object that is a representation of the gRPC `Message` object.
     * @param message Message object.
     */
    constructor({
        subject, key, value, correlationId = hyperId().uuid, headers, ackInbox, ackPolicy, partitionStrategy, partition = undefined,
    }: ILiftbridgeMessage) {
        super();
        if (subject) this.setSubject(subject);
        this.setValue(typeof value === 'string' ? Buffer.from(value) : value);

        if (key) {
            this.setKey(typeof key === 'string' ? Buffer.from(key) : key);
        } else {
            this.setKey(Buffer.from(''));
        }

        if (partition) {
            this.partition = partition;
            this.partitionStrategy = undefined;
        } else {
            this.partitionStrategy = partitionStrategy;
            this.partition = undefined;
        }

        if (correlationId) this.setCorrelationid(correlationId);
        if (ackInbox) this.setAckinbox(ackInbox);
        if (!ackPolicy) this.setAckpolicy(AckPolicy.NONE);
        this.setTimestamp(Date.now() * 1e6); // Time since UNIX epoch in nanoseconds.
    }

    /**
     * Create a serialized `Message` object with the Liftbridge envelope.
     *
     * ℹ️ Use only when you're talking directly to NATS systems.
     */
    public serializeMessage(): Buffer {
        const serializedMessage = this.serializeBinary();
        return Buffer.concat([envelopeCookie, serializedMessage], envelopeCookieLength + serializedMessage.length);
    }
}
