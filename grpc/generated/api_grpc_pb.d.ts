// GENERATED CODE -- DO NOT EDIT!

// package: proto
// file: api.proto

import * as api_pb from "./api_pb";
import * as grpc from "grpc";

interface IAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createStream: grpc.MethodDefinition<api_pb.CreateStreamRequest, api_pb.CreateStreamResponse>;
  deleteStream: grpc.MethodDefinition<api_pb.DeleteStreamRequest, api_pb.DeleteStreamResponse>;
  pauseStream: grpc.MethodDefinition<api_pb.PauseStreamRequest, api_pb.PauseStreamResponse>;
  setStreamReadonly: grpc.MethodDefinition<api_pb.SetStreamReadonlyRequest, api_pb.SetStreamReadonlyResponse>;
  subscribe: grpc.MethodDefinition<api_pb.SubscribeRequest, api_pb.Message>;
  fetchMetadata: grpc.MethodDefinition<api_pb.FetchMetadataRequest, api_pb.FetchMetadataResponse>;
  fetchPartitionMetadata: grpc.MethodDefinition<api_pb.FetchPartitionMetadataRequest, api_pb.FetchPartitionMetadataResponse>;
  publish: grpc.MethodDefinition<api_pb.PublishRequest, api_pb.PublishResponse>;
  publishAsync: grpc.MethodDefinition<api_pb.PublishRequest, api_pb.PublishResponse>;
  publishToSubject: grpc.MethodDefinition<api_pb.PublishToSubjectRequest, api_pb.PublishToSubjectResponse>;
  setCursor: grpc.MethodDefinition<api_pb.SetCursorRequest, api_pb.SetCursorResponse>;
  fetchCursor: grpc.MethodDefinition<api_pb.FetchCursorRequest, api_pb.FetchCursorResponse>;
}

export const APIService: IAPIService;

export interface IAPIServer extends grpc.UntypedServiceImplementation {
  createStream: grpc.handleUnaryCall<api_pb.CreateStreamRequest, api_pb.CreateStreamResponse>;
  deleteStream: grpc.handleUnaryCall<api_pb.DeleteStreamRequest, api_pb.DeleteStreamResponse>;
  pauseStream: grpc.handleUnaryCall<api_pb.PauseStreamRequest, api_pb.PauseStreamResponse>;
  setStreamReadonly: grpc.handleUnaryCall<api_pb.SetStreamReadonlyRequest, api_pb.SetStreamReadonlyResponse>;
  subscribe: grpc.handleServerStreamingCall<api_pb.SubscribeRequest, api_pb.Message>;
  fetchMetadata: grpc.handleUnaryCall<api_pb.FetchMetadataRequest, api_pb.FetchMetadataResponse>;
  fetchPartitionMetadata: grpc.handleUnaryCall<api_pb.FetchPartitionMetadataRequest, api_pb.FetchPartitionMetadataResponse>;
  publish: grpc.handleUnaryCall<api_pb.PublishRequest, api_pb.PublishResponse>;
  publishAsync: grpc.handleBidiStreamingCall<api_pb.PublishRequest, api_pb.PublishResponse>;
  publishToSubject: grpc.handleUnaryCall<api_pb.PublishToSubjectRequest, api_pb.PublishToSubjectResponse>;
  setCursor: grpc.handleUnaryCall<api_pb.SetCursorRequest, api_pb.SetCursorResponse>;
  fetchCursor: grpc.handleUnaryCall<api_pb.FetchCursorRequest, api_pb.FetchCursorResponse>;
}

export class APIClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createStream(argument: api_pb.CreateStreamRequest, callback: grpc.requestCallback<api_pb.CreateStreamResponse>): grpc.ClientUnaryCall;
  createStream(argument: api_pb.CreateStreamRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.CreateStreamResponse>): grpc.ClientUnaryCall;
  createStream(argument: api_pb.CreateStreamRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.CreateStreamResponse>): grpc.ClientUnaryCall;
  deleteStream(argument: api_pb.DeleteStreamRequest, callback: grpc.requestCallback<api_pb.DeleteStreamResponse>): grpc.ClientUnaryCall;
  deleteStream(argument: api_pb.DeleteStreamRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.DeleteStreamResponse>): grpc.ClientUnaryCall;
  deleteStream(argument: api_pb.DeleteStreamRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.DeleteStreamResponse>): grpc.ClientUnaryCall;
  pauseStream(argument: api_pb.PauseStreamRequest, callback: grpc.requestCallback<api_pb.PauseStreamResponse>): grpc.ClientUnaryCall;
  pauseStream(argument: api_pb.PauseStreamRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.PauseStreamResponse>): grpc.ClientUnaryCall;
  pauseStream(argument: api_pb.PauseStreamRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.PauseStreamResponse>): grpc.ClientUnaryCall;
  setStreamReadonly(argument: api_pb.SetStreamReadonlyRequest, callback: grpc.requestCallback<api_pb.SetStreamReadonlyResponse>): grpc.ClientUnaryCall;
  setStreamReadonly(argument: api_pb.SetStreamReadonlyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.SetStreamReadonlyResponse>): grpc.ClientUnaryCall;
  setStreamReadonly(argument: api_pb.SetStreamReadonlyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.SetStreamReadonlyResponse>): grpc.ClientUnaryCall;
  subscribe(argument: api_pb.SubscribeRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<api_pb.Message>;
  subscribe(argument: api_pb.SubscribeRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<api_pb.Message>;
  fetchMetadata(argument: api_pb.FetchMetadataRequest, callback: grpc.requestCallback<api_pb.FetchMetadataResponse>): grpc.ClientUnaryCall;
  fetchMetadata(argument: api_pb.FetchMetadataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.FetchMetadataResponse>): grpc.ClientUnaryCall;
  fetchMetadata(argument: api_pb.FetchMetadataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.FetchMetadataResponse>): grpc.ClientUnaryCall;
  fetchPartitionMetadata(argument: api_pb.FetchPartitionMetadataRequest, callback: grpc.requestCallback<api_pb.FetchPartitionMetadataResponse>): grpc.ClientUnaryCall;
  fetchPartitionMetadata(argument: api_pb.FetchPartitionMetadataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.FetchPartitionMetadataResponse>): grpc.ClientUnaryCall;
  fetchPartitionMetadata(argument: api_pb.FetchPartitionMetadataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.FetchPartitionMetadataResponse>): grpc.ClientUnaryCall;
  publish(argument: api_pb.PublishRequest, callback: grpc.requestCallback<api_pb.PublishResponse>): grpc.ClientUnaryCall;
  publish(argument: api_pb.PublishRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.PublishResponse>): grpc.ClientUnaryCall;
  publish(argument: api_pb.PublishRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.PublishResponse>): grpc.ClientUnaryCall;
  publishAsync(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<api_pb.PublishRequest, api_pb.PublishResponse>;
  publishAsync(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<api_pb.PublishRequest, api_pb.PublishResponse>;
  publishToSubject(argument: api_pb.PublishToSubjectRequest, callback: grpc.requestCallback<api_pb.PublishToSubjectResponse>): grpc.ClientUnaryCall;
  publishToSubject(argument: api_pb.PublishToSubjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.PublishToSubjectResponse>): grpc.ClientUnaryCall;
  publishToSubject(argument: api_pb.PublishToSubjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.PublishToSubjectResponse>): grpc.ClientUnaryCall;
  setCursor(argument: api_pb.SetCursorRequest, callback: grpc.requestCallback<api_pb.SetCursorResponse>): grpc.ClientUnaryCall;
  setCursor(argument: api_pb.SetCursorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.SetCursorResponse>): grpc.ClientUnaryCall;
  setCursor(argument: api_pb.SetCursorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.SetCursorResponse>): grpc.ClientUnaryCall;
  fetchCursor(argument: api_pb.FetchCursorRequest, callback: grpc.requestCallback<api_pb.FetchCursorResponse>): grpc.ClientUnaryCall;
  fetchCursor(argument: api_pb.FetchCursorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.FetchCursorResponse>): grpc.ClientUnaryCall;
  fetchCursor(argument: api_pb.FetchCursorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<api_pb.FetchCursorResponse>): grpc.ClientUnaryCall;
}
