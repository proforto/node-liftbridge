// package: proto
// file: api.proto

import * as jspb from "google-protobuf";

export class NullableInt64 extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullableInt64.AsObject;
  static toObject(includeInstance: boolean, msg: NullableInt64): NullableInt64.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NullableInt64, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullableInt64;
  static deserializeBinaryFromReader(message: NullableInt64, reader: jspb.BinaryReader): NullableInt64;
}

export namespace NullableInt64 {
  export type AsObject = {
    value: number,
  }
}

export class NullableInt32 extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullableInt32.AsObject;
  static toObject(includeInstance: boolean, msg: NullableInt32): NullableInt32.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NullableInt32, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullableInt32;
  static deserializeBinaryFromReader(message: NullableInt32, reader: jspb.BinaryReader): NullableInt32;
}

export namespace NullableInt32 {
  export type AsObject = {
    value: number,
  }
}

export class NullableBool extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullableBool.AsObject;
  static toObject(includeInstance: boolean, msg: NullableBool): NullableBool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NullableBool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullableBool;
  static deserializeBinaryFromReader(message: NullableBool, reader: jspb.BinaryReader): NullableBool;
}

export namespace NullableBool {
  export type AsObject = {
    value: boolean,
  }
}

export class CreateStreamRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getName(): string;
  setName(value: string): void;

  getGroup(): string;
  setGroup(value: string): void;

  getReplicationfactor(): number;
  setReplicationfactor(value: number): void;

  getPartitions(): number;
  setPartitions(value: number): void;

  hasRetentionmaxbytes(): boolean;
  clearRetentionmaxbytes(): void;
  getRetentionmaxbytes(): NullableInt64 | undefined;
  setRetentionmaxbytes(value?: NullableInt64): void;

  hasRetentionmaxmessages(): boolean;
  clearRetentionmaxmessages(): void;
  getRetentionmaxmessages(): NullableInt64 | undefined;
  setRetentionmaxmessages(value?: NullableInt64): void;

  hasRetentionmaxage(): boolean;
  clearRetentionmaxage(): void;
  getRetentionmaxage(): NullableInt64 | undefined;
  setRetentionmaxage(value?: NullableInt64): void;

  hasCleanerinterval(): boolean;
  clearCleanerinterval(): void;
  getCleanerinterval(): NullableInt64 | undefined;
  setCleanerinterval(value?: NullableInt64): void;

  hasSegmentmaxbytes(): boolean;
  clearSegmentmaxbytes(): void;
  getSegmentmaxbytes(): NullableInt64 | undefined;
  setSegmentmaxbytes(value?: NullableInt64): void;

  hasSegmentmaxage(): boolean;
  clearSegmentmaxage(): void;
  getSegmentmaxage(): NullableInt64 | undefined;
  setSegmentmaxage(value?: NullableInt64): void;

  hasCompactmaxgoroutines(): boolean;
  clearCompactmaxgoroutines(): void;
  getCompactmaxgoroutines(): NullableInt32 | undefined;
  setCompactmaxgoroutines(value?: NullableInt32): void;

  hasCompactenabled(): boolean;
  clearCompactenabled(): void;
  getCompactenabled(): NullableBool | undefined;
  setCompactenabled(value?: NullableBool): void;

  hasAutopausetime(): boolean;
  clearAutopausetime(): void;
  getAutopausetime(): NullableInt64 | undefined;
  setAutopausetime(value?: NullableInt64): void;

  hasAutopausedisableifsubscribers(): boolean;
  clearAutopausedisableifsubscribers(): void;
  getAutopausedisableifsubscribers(): NullableBool | undefined;
  setAutopausedisableifsubscribers(value?: NullableBool): void;

  hasMinisr(): boolean;
  clearMinisr(): void;
  getMinisr(): NullableInt32 | undefined;
  setMinisr(value?: NullableInt32): void;

  hasOptimisticconcurrencycontrol(): boolean;
  clearOptimisticconcurrencycontrol(): void;
  getOptimisticconcurrencycontrol(): NullableBool | undefined;
  setOptimisticconcurrencycontrol(value?: NullableBool): void;

  hasEncryption(): boolean;
  clearEncryption(): void;
  getEncryption(): NullableBool | undefined;
  setEncryption(value?: NullableBool): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStreamRequest): CreateStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStreamRequest;
  static deserializeBinaryFromReader(message: CreateStreamRequest, reader: jspb.BinaryReader): CreateStreamRequest;
}

export namespace CreateStreamRequest {
  export type AsObject = {
    subject: string,
    name: string,
    group: string,
    replicationfactor: number,
    partitions: number,
    retentionmaxbytes?: NullableInt64.AsObject,
    retentionmaxmessages?: NullableInt64.AsObject,
    retentionmaxage?: NullableInt64.AsObject,
    cleanerinterval?: NullableInt64.AsObject,
    segmentmaxbytes?: NullableInt64.AsObject,
    segmentmaxage?: NullableInt64.AsObject,
    compactmaxgoroutines?: NullableInt32.AsObject,
    compactenabled?: NullableBool.AsObject,
    autopausetime?: NullableInt64.AsObject,
    autopausedisableifsubscribers?: NullableBool.AsObject,
    minisr?: NullableInt32.AsObject,
    optimisticconcurrencycontrol?: NullableBool.AsObject,
    encryption?: NullableBool.AsObject,
  }
}

export class CreateStreamResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStreamResponse): CreateStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStreamResponse;
  static deserializeBinaryFromReader(message: CreateStreamResponse, reader: jspb.BinaryReader): CreateStreamResponse;
}

export namespace CreateStreamResponse {
  export type AsObject = {
  }
}

export class DeleteStreamRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStreamRequest): DeleteStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStreamRequest;
  static deserializeBinaryFromReader(message: DeleteStreamRequest, reader: jspb.BinaryReader): DeleteStreamRequest;
}

export namespace DeleteStreamRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteStreamResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStreamResponse): DeleteStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStreamResponse;
  static deserializeBinaryFromReader(message: DeleteStreamResponse, reader: jspb.BinaryReader): DeleteStreamResponse;
}

export namespace DeleteStreamResponse {
  export type AsObject = {
  }
}

export class PauseStreamRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearPartitionsList(): void;
  getPartitionsList(): Array<number>;
  setPartitionsList(value: Array<number>): void;
  addPartitions(value: number, index?: number): number;

  getResumeall(): boolean;
  setResumeall(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PauseStreamRequest): PauseStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseStreamRequest;
  static deserializeBinaryFromReader(message: PauseStreamRequest, reader: jspb.BinaryReader): PauseStreamRequest;
}

export namespace PauseStreamRequest {
  export type AsObject = {
    name: string,
    partitionsList: Array<number>,
    resumeall: boolean,
  }
}

export class PauseStreamResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PauseStreamResponse): PauseStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseStreamResponse;
  static deserializeBinaryFromReader(message: PauseStreamResponse, reader: jspb.BinaryReader): PauseStreamResponse;
}

export namespace PauseStreamResponse {
  export type AsObject = {
  }
}

export class SetStreamReadonlyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearPartitionsList(): void;
  getPartitionsList(): Array<number>;
  setPartitionsList(value: Array<number>): void;
  addPartitions(value: number, index?: number): number;

  getReadonly(): boolean;
  setReadonly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStreamReadonlyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetStreamReadonlyRequest): SetStreamReadonlyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetStreamReadonlyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStreamReadonlyRequest;
  static deserializeBinaryFromReader(message: SetStreamReadonlyRequest, reader: jspb.BinaryReader): SetStreamReadonlyRequest;
}

export namespace SetStreamReadonlyRequest {
  export type AsObject = {
    name: string,
    partitionsList: Array<number>,
    readonly: boolean,
  }
}

export class SetStreamReadonlyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStreamReadonlyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetStreamReadonlyResponse): SetStreamReadonlyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetStreamReadonlyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStreamReadonlyResponse;
  static deserializeBinaryFromReader(message: SetStreamReadonlyResponse, reader: jspb.BinaryReader): SetStreamReadonlyResponse;
}

export namespace SetStreamReadonlyResponse {
  export type AsObject = {
  }
}

export class SubscribeRequest extends jspb.Message {
  getStream(): string;
  setStream(value: string): void;

  getPartition(): number;
  setPartition(value: number): void;

  getStartposition(): StartPositionMap[keyof StartPositionMap];
  setStartposition(value: StartPositionMap[keyof StartPositionMap]): void;

  getStartoffset(): string;
  setStartoffset(value: string): void;

  getStarttimestamp(): string;
  setStarttimestamp(value: string): void;

  getReadisrreplica(): boolean;
  setReadisrreplica(value: boolean): void;

  getResume(): boolean;
  setResume(value: boolean): void;

  getStopposition(): StopPositionMap[keyof StopPositionMap];
  setStopposition(value: StopPositionMap[keyof StopPositionMap]): void;

  getStopoffset(): string;
  setStopoffset(value: string): void;

  getStoptimestamp(): string;
  setStoptimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeRequest): SubscribeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeRequest;
  static deserializeBinaryFromReader(message: SubscribeRequest, reader: jspb.BinaryReader): SubscribeRequest;
}

export namespace SubscribeRequest {
  export type AsObject = {
    stream: string,
    partition: number,
    startposition: StartPositionMap[keyof StartPositionMap],
    startoffset: string,
    starttimestamp: string,
    readisrreplica: boolean,
    resume: boolean,
    stopposition: StopPositionMap[keyof StopPositionMap],
    stopoffset: string,
    stoptimestamp: string,
  }
}

export class FetchMetadataRequest extends jspb.Message {
  clearStreamsList(): void;
  getStreamsList(): Array<string>;
  setStreamsList(value: Array<string>): void;
  addStreams(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchMetadataRequest): FetchMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchMetadataRequest;
  static deserializeBinaryFromReader(message: FetchMetadataRequest, reader: jspb.BinaryReader): FetchMetadataRequest;
}

export namespace FetchMetadataRequest {
  export type AsObject = {
    streamsList: Array<string>,
  }
}

export class FetchMetadataResponse extends jspb.Message {
  clearBrokersList(): void;
  getBrokersList(): Array<Broker>;
  setBrokersList(value: Array<Broker>): void;
  addBrokers(value?: Broker, index?: number): Broker;

  clearMetadataList(): void;
  getMetadataList(): Array<StreamMetadata>;
  setMetadataList(value: Array<StreamMetadata>): void;
  addMetadata(value?: StreamMetadata, index?: number): StreamMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchMetadataResponse): FetchMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchMetadataResponse;
  static deserializeBinaryFromReader(message: FetchMetadataResponse, reader: jspb.BinaryReader): FetchMetadataResponse;
}

export namespace FetchMetadataResponse {
  export type AsObject = {
    brokersList: Array<Broker.AsObject>,
    metadataList: Array<StreamMetadata.AsObject>,
  }
}

export class FetchPartitionMetadataRequest extends jspb.Message {
  getStream(): string;
  setStream(value: string): void;

  getPartition(): number;
  setPartition(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchPartitionMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchPartitionMetadataRequest): FetchPartitionMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchPartitionMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchPartitionMetadataRequest;
  static deserializeBinaryFromReader(message: FetchPartitionMetadataRequest, reader: jspb.BinaryReader): FetchPartitionMetadataRequest;
}

export namespace FetchPartitionMetadataRequest {
  export type AsObject = {
    stream: string,
    partition: number,
  }
}

export class FetchPartitionMetadataResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): PartitionMetadata | undefined;
  setMetadata(value?: PartitionMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchPartitionMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchPartitionMetadataResponse): FetchPartitionMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchPartitionMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchPartitionMetadataResponse;
  static deserializeBinaryFromReader(message: FetchPartitionMetadataResponse, reader: jspb.BinaryReader): FetchPartitionMetadataResponse;
}

export namespace FetchPartitionMetadataResponse {
  export type AsObject = {
    metadata?: PartitionMetadata.AsObject,
  }
}

export class PublishRequest extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getStream(): string;
  setStream(value: string): void;

  getPartition(): number;
  setPartition(value: number): void;

  getHeadersMap(): jspb.Map<string, Uint8Array | string>;
  clearHeadersMap(): void;
  getAckinbox(): string;
  setAckinbox(value: string): void;

  getCorrelationid(): string;
  setCorrelationid(value: string): void;

  getAckpolicy(): AckPolicyMap[keyof AckPolicyMap];
  setAckpolicy(value: AckPolicyMap[keyof AckPolicyMap]): void;

  getExpectedoffset(): number;
  setExpectedoffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishRequest): PublishRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishRequest;
  static deserializeBinaryFromReader(message: PublishRequest, reader: jspb.BinaryReader): PublishRequest;
}

export namespace PublishRequest {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
    stream: string,
    partition: number,
    headersMap: Array<[string, Uint8Array | string]>,
    ackinbox: string,
    correlationid: string,
    ackpolicy: AckPolicyMap[keyof AckPolicyMap],
    expectedoffset: number,
  }
}

export class PublishAsyncError extends jspb.Message {
  getCode(): PublishAsyncError.CodeMap[keyof PublishAsyncError.CodeMap];
  setCode(value: PublishAsyncError.CodeMap[keyof PublishAsyncError.CodeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishAsyncError.AsObject;
  static toObject(includeInstance: boolean, msg: PublishAsyncError): PublishAsyncError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishAsyncError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishAsyncError;
  static deserializeBinaryFromReader(message: PublishAsyncError, reader: jspb.BinaryReader): PublishAsyncError;
}

export namespace PublishAsyncError {
  export type AsObject = {
    code: PublishAsyncError.CodeMap[keyof PublishAsyncError.CodeMap],
    message: string,
  }

  export interface CodeMap {
    UNKNOWN: 0;
    BAD_REQUEST: 1;
    NOT_FOUND: 2;
    INTERNAL: 3;
    READONLY: 4;
    INCORRECT_OFFSET: 5;
    ENCRYPTION_FAILED: 6;
  }

  export const Code: CodeMap;
}

export class PublishResponse extends jspb.Message {
  hasAck(): boolean;
  clearAck(): void;
  getAck(): Ack | undefined;
  setAck(value?: Ack): void;

  hasAsyncerror(): boolean;
  clearAsyncerror(): void;
  getAsyncerror(): PublishAsyncError | undefined;
  setAsyncerror(value?: PublishAsyncError): void;

  getCorrelationid(): string;
  setCorrelationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishResponse): PublishResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishResponse;
  static deserializeBinaryFromReader(message: PublishResponse, reader: jspb.BinaryReader): PublishResponse;
}

export namespace PublishResponse {
  export type AsObject = {
    ack?: Ack.AsObject,
    asyncerror?: PublishAsyncError.AsObject,
    correlationid: string,
  }
}

export class PublishToSubjectRequest extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getHeadersMap(): jspb.Map<string, Uint8Array | string>;
  clearHeadersMap(): void;
  getAckinbox(): string;
  setAckinbox(value: string): void;

  getCorrelationid(): string;
  setCorrelationid(value: string): void;

  getAckpolicy(): AckPolicyMap[keyof AckPolicyMap];
  setAckpolicy(value: AckPolicyMap[keyof AckPolicyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishToSubjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishToSubjectRequest): PublishToSubjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishToSubjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishToSubjectRequest;
  static deserializeBinaryFromReader(message: PublishToSubjectRequest, reader: jspb.BinaryReader): PublishToSubjectRequest;
}

export namespace PublishToSubjectRequest {
  export type AsObject = {
    key: Uint8Array | string,
    value: Uint8Array | string,
    subject: string,
    headersMap: Array<[string, Uint8Array | string]>,
    ackinbox: string,
    correlationid: string,
    ackpolicy: AckPolicyMap[keyof AckPolicyMap],
  }
}

export class PublishToSubjectResponse extends jspb.Message {
  hasAck(): boolean;
  clearAck(): void;
  getAck(): Ack | undefined;
  setAck(value?: Ack): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishToSubjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishToSubjectResponse): PublishToSubjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishToSubjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishToSubjectResponse;
  static deserializeBinaryFromReader(message: PublishToSubjectResponse, reader: jspb.BinaryReader): PublishToSubjectResponse;
}

export namespace PublishToSubjectResponse {
  export type AsObject = {
    ack?: Ack.AsObject,
  }
}

export class SetCursorRequest extends jspb.Message {
  getStream(): string;
  setStream(value: string): void;

  getPartition(): number;
  setPartition(value: number): void;

  getCursorid(): string;
  setCursorid(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCursorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetCursorRequest): SetCursorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCursorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCursorRequest;
  static deserializeBinaryFromReader(message: SetCursorRequest, reader: jspb.BinaryReader): SetCursorRequest;
}

export namespace SetCursorRequest {
  export type AsObject = {
    stream: string,
    partition: number,
    cursorid: string,
    offset: number,
  }
}

export class SetCursorResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCursorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetCursorResponse): SetCursorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCursorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCursorResponse;
  static deserializeBinaryFromReader(message: SetCursorResponse, reader: jspb.BinaryReader): SetCursorResponse;
}

export namespace SetCursorResponse {
  export type AsObject = {
  }
}

export class FetchCursorRequest extends jspb.Message {
  getStream(): string;
  setStream(value: string): void;

  getPartition(): number;
  setPartition(value: number): void;

  getCursorid(): string;
  setCursorid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchCursorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchCursorRequest): FetchCursorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchCursorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchCursorRequest;
  static deserializeBinaryFromReader(message: FetchCursorRequest, reader: jspb.BinaryReader): FetchCursorRequest;
}

export namespace FetchCursorRequest {
  export type AsObject = {
    stream: string,
    partition: number,
    cursorid: string,
  }
}

export class FetchCursorResponse extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchCursorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchCursorResponse): FetchCursorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchCursorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchCursorResponse;
  static deserializeBinaryFromReader(message: FetchCursorResponse, reader: jspb.BinaryReader): FetchCursorResponse;
}

export namespace FetchCursorResponse {
  export type AsObject = {
    offset: number,
  }
}

export class Broker extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Broker.AsObject;
  static toObject(includeInstance: boolean, msg: Broker): Broker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Broker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Broker;
  static deserializeBinaryFromReader(message: Broker, reader: jspb.BinaryReader): Broker;
}

export namespace Broker {
  export type AsObject = {
    id: string,
    host: string,
    port: number,
  }
}

export class StreamMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getError(): StreamMetadata.ErrorMap[keyof StreamMetadata.ErrorMap];
  setError(value: StreamMetadata.ErrorMap[keyof StreamMetadata.ErrorMap]): void;

  getPartitionsMap(): jspb.Map<number, PartitionMetadata>;
  clearPartitionsMap(): void;
  getCreationtimestamp(): string;
  setCreationtimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMetadata): StreamMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMetadata;
  static deserializeBinaryFromReader(message: StreamMetadata, reader: jspb.BinaryReader): StreamMetadata;
}

export namespace StreamMetadata {
  export type AsObject = {
    name: string,
    subject: string,
    error: StreamMetadata.ErrorMap[keyof StreamMetadata.ErrorMap],
    partitionsMap: Array<[number, PartitionMetadata.AsObject]>,
    creationtimestamp: string,
  }

  export interface ErrorMap {
    OK: 0;
    UNKNOWN_STREAM: 1;
  }

  export const Error: ErrorMap;
}

export class PartitionEventTimestamps extends jspb.Message {
  getFirsttimestamp(): string;
  setFirsttimestamp(value: string): void;

  getLatesttimestamp(): string;
  setLatesttimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionEventTimestamps.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionEventTimestamps): PartitionEventTimestamps.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartitionEventTimestamps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionEventTimestamps;
  static deserializeBinaryFromReader(message: PartitionEventTimestamps, reader: jspb.BinaryReader): PartitionEventTimestamps;
}

export namespace PartitionEventTimestamps {
  export type AsObject = {
    firsttimestamp: string,
    latesttimestamp: string,
  }
}

export class PartitionMetadata extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getLeader(): string;
  setLeader(value: string): void;

  clearReplicasList(): void;
  getReplicasList(): Array<string>;
  setReplicasList(value: Array<string>): void;
  addReplicas(value: string, index?: number): string;

  clearIsrList(): void;
  getIsrList(): Array<string>;
  setIsrList(value: Array<string>): void;
  addIsr(value: string, index?: number): string;

  getHighwatermark(): number;
  setHighwatermark(value: number): void;

  getNewestoffset(): number;
  setNewestoffset(value: number): void;

  getPaused(): boolean;
  setPaused(value: boolean): void;

  getReadonly(): boolean;
  setReadonly(value: boolean): void;

  hasMessagesreceivedtimestamps(): boolean;
  clearMessagesreceivedtimestamps(): void;
  getMessagesreceivedtimestamps(): PartitionEventTimestamps | undefined;
  setMessagesreceivedtimestamps(value?: PartitionEventTimestamps): void;

  hasPausetimestamps(): boolean;
  clearPausetimestamps(): void;
  getPausetimestamps(): PartitionEventTimestamps | undefined;
  setPausetimestamps(value?: PartitionEventTimestamps): void;

  hasReadonlytimestamps(): boolean;
  clearReadonlytimestamps(): void;
  getReadonlytimestamps(): PartitionEventTimestamps | undefined;
  setReadonlytimestamps(value?: PartitionEventTimestamps): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionMetadata): PartitionMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartitionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionMetadata;
  static deserializeBinaryFromReader(message: PartitionMetadata, reader: jspb.BinaryReader): PartitionMetadata;
}

export namespace PartitionMetadata {
  export type AsObject = {
    id: number,
    leader: string,
    replicasList: Array<string>,
    isrList: Array<string>,
    highwatermark: number,
    newestoffset: number,
    paused: boolean,
    readonly: boolean,
    messagesreceivedtimestamps?: PartitionEventTimestamps.AsObject,
    pausetimestamps?: PartitionEventTimestamps.AsObject,
    readonlytimestamps?: PartitionEventTimestamps.AsObject,
  }
}

export class Message extends jspb.Message {
  getOffset(): string;
  setOffset(value: string): void;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  getStream(): string;
  setStream(value: string): void;

  getPartition(): number;
  setPartition(value: number): void;

  getSubject(): string;
  setSubject(value: string): void;

  getReplysubject(): string;
  setReplysubject(value: string): void;

  getHeadersMap(): jspb.Map<string, Uint8Array | string>;
  clearHeadersMap(): void;
  getAckinbox(): string;
  setAckinbox(value: string): void;

  getCorrelationid(): string;
  setCorrelationid(value: string): void;

  getAckpolicy(): AckPolicyMap[keyof AckPolicyMap];
  setAckpolicy(value: AckPolicyMap[keyof AckPolicyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    offset: string,
    key: Uint8Array | string,
    value: Uint8Array | string,
    timestamp: string,
    stream: string,
    partition: number,
    subject: string,
    replysubject: string,
    headersMap: Array<[string, Uint8Array | string]>,
    ackinbox: string,
    correlationid: string,
    ackpolicy: AckPolicyMap[keyof AckPolicyMap],
  }
}

export class Ack extends jspb.Message {
  getStream(): string;
  setStream(value: string): void;

  getPartitionsubject(): string;
  setPartitionsubject(value: string): void;

  getMsgsubject(): string;
  setMsgsubject(value: string): void;

  getOffset(): string;
  setOffset(value: string): void;

  getAckinbox(): string;
  setAckinbox(value: string): void;

  getCorrelationid(): string;
  setCorrelationid(value: string): void;

  getAckpolicy(): AckPolicyMap[keyof AckPolicyMap];
  setAckpolicy(value: AckPolicyMap[keyof AckPolicyMap]): void;

  getReceptiontimestamp(): string;
  setReceptiontimestamp(value: string): void;

  getCommittimestamp(): string;
  setCommittimestamp(value: string): void;

  getAckerror(): Ack.ErrorMap[keyof Ack.ErrorMap];
  setAckerror(value: Ack.ErrorMap[keyof Ack.ErrorMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ack.AsObject;
  static toObject(includeInstance: boolean, msg: Ack): Ack.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ack, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ack;
  static deserializeBinaryFromReader(message: Ack, reader: jspb.BinaryReader): Ack;
}

export namespace Ack {
  export type AsObject = {
    stream: string,
    partitionsubject: string,
    msgsubject: string,
    offset: string,
    ackinbox: string,
    correlationid: string,
    ackpolicy: AckPolicyMap[keyof AckPolicyMap],
    receptiontimestamp: string,
    committimestamp: string,
    ackerror: Ack.ErrorMap[keyof Ack.ErrorMap],
  }

  export interface ErrorMap {
    OK: 0;
    UNKNOWN: 1;
    INCORRECT_OFFSET: 2;
    TOO_LARGE: 3;
    ENCRYPTION: 4;
  }

  export const Error: ErrorMap;
}

export class CreateStreamOp extends jspb.Message {
  getStream(): string;
  setStream(value: string): void;

  clearPartitionsList(): void;
  getPartitionsList(): Array<number>;
  setPartitionsList(value: Array<number>): void;
  addPartitions(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStreamOp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStreamOp): CreateStreamOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateStreamOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStreamOp;
  static deserializeBinaryFromReader(message: CreateStreamOp, reader: jspb.BinaryReader): CreateStreamOp;
}

export namespace CreateStreamOp {
  export type AsObject = {
    stream: string,
    partitionsList: Array<number>,
  }
}

export class DeleteStreamOp extends jspb.Message {
  getStream(): string;
  setStream(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStreamOp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStreamOp): DeleteStreamOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteStreamOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStreamOp;
  static deserializeBinaryFromReader(message: DeleteStreamOp, reader: jspb.BinaryReader): DeleteStreamOp;
}

export namespace DeleteStreamOp {
  export type AsObject = {
    stream: string,
  }
}

export class PauseStreamOp extends jspb.Message {
  getStream(): string;
  setStream(value: string): void;

  clearPartitionsList(): void;
  getPartitionsList(): Array<number>;
  setPartitionsList(value: Array<number>): void;
  addPartitions(value: number, index?: number): number;

  getResumeall(): boolean;
  setResumeall(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PauseStreamOp.AsObject;
  static toObject(includeInstance: boolean, msg: PauseStreamOp): PauseStreamOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PauseStreamOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PauseStreamOp;
  static deserializeBinaryFromReader(message: PauseStreamOp, reader: jspb.BinaryReader): PauseStreamOp;
}

export namespace PauseStreamOp {
  export type AsObject = {
    stream: string,
    partitionsList: Array<number>,
    resumeall: boolean,
  }
}

export class ResumeStreamOp extends jspb.Message {
  getStream(): string;
  setStream(value: string): void;

  clearPartitionsList(): void;
  getPartitionsList(): Array<number>;
  setPartitionsList(value: Array<number>): void;
  addPartitions(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeStreamOp.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeStreamOp): ResumeStreamOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResumeStreamOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeStreamOp;
  static deserializeBinaryFromReader(message: ResumeStreamOp, reader: jspb.BinaryReader): ResumeStreamOp;
}

export namespace ResumeStreamOp {
  export type AsObject = {
    stream: string,
    partitionsList: Array<number>,
  }
}

export class SetStreamReadonlyOp extends jspb.Message {
  getStream(): string;
  setStream(value: string): void;

  clearPartitionsList(): void;
  getPartitionsList(): Array<number>;
  setPartitionsList(value: Array<number>): void;
  addPartitions(value: number, index?: number): number;

  getReadonly(): boolean;
  setReadonly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetStreamReadonlyOp.AsObject;
  static toObject(includeInstance: boolean, msg: SetStreamReadonlyOp): SetStreamReadonlyOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetStreamReadonlyOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetStreamReadonlyOp;
  static deserializeBinaryFromReader(message: SetStreamReadonlyOp, reader: jspb.BinaryReader): SetStreamReadonlyOp;
}

export namespace SetStreamReadonlyOp {
  export type AsObject = {
    stream: string,
    partitionsList: Array<number>,
    readonly: boolean,
  }
}

export class ActivityStreamEvent extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getOp(): ActivityStreamOpMap[keyof ActivityStreamOpMap];
  setOp(value: ActivityStreamOpMap[keyof ActivityStreamOpMap]): void;

  hasCreatestreamop(): boolean;
  clearCreatestreamop(): void;
  getCreatestreamop(): CreateStreamOp | undefined;
  setCreatestreamop(value?: CreateStreamOp): void;

  hasDeletestreamop(): boolean;
  clearDeletestreamop(): void;
  getDeletestreamop(): DeleteStreamOp | undefined;
  setDeletestreamop(value?: DeleteStreamOp): void;

  hasPausestreamop(): boolean;
  clearPausestreamop(): void;
  getPausestreamop(): PauseStreamOp | undefined;
  setPausestreamop(value?: PauseStreamOp): void;

  hasResumestreamop(): boolean;
  clearResumestreamop(): void;
  getResumestreamop(): ResumeStreamOp | undefined;
  setResumestreamop(value?: ResumeStreamOp): void;

  hasSetstreamreadonlyop(): boolean;
  clearSetstreamreadonlyop(): void;
  getSetstreamreadonlyop(): SetStreamReadonlyOp | undefined;
  setSetstreamreadonlyop(value?: SetStreamReadonlyOp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityStreamEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityStreamEvent): ActivityStreamEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityStreamEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityStreamEvent;
  static deserializeBinaryFromReader(message: ActivityStreamEvent, reader: jspb.BinaryReader): ActivityStreamEvent;
}

export namespace ActivityStreamEvent {
  export type AsObject = {
    id: number,
    op: ActivityStreamOpMap[keyof ActivityStreamOpMap],
    createstreamop?: CreateStreamOp.AsObject,
    deletestreamop?: DeleteStreamOp.AsObject,
    pausestreamop?: PauseStreamOp.AsObject,
    resumestreamop?: ResumeStreamOp.AsObject,
    setstreamreadonlyop?: SetStreamReadonlyOp.AsObject,
  }
}

export interface StartPositionMap {
  NEW_ONLY: 0;
  OFFSET: 1;
  EARLIEST: 2;
  LATEST: 3;
  TIMESTAMP: 4;
}

export const StartPosition: StartPositionMap;

export interface StopPositionMap {
  STOP_ON_CANCEL: 0;
  STOP_OFFSET: 1;
  STOP_LATEST: 2;
  STOP_TIMESTAMP: 3;
}

export const StopPosition: StopPositionMap;

export interface AckPolicyMap {
  LEADER: 0;
  ALL: 1;
  NONE: 2;
}

export const AckPolicy: AckPolicyMap;

export interface ActivityStreamOpMap {
  CREATE_STREAM: 0;
  DELETE_STREAM: 1;
  PAUSE_STREAM: 2;
  RESUME_STREAM: 3;
  SET_STREAM_READONLY: 4;
}

export const ActivityStreamOp: ActivityStreamOpMap;

