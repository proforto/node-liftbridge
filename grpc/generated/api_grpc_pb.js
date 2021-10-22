// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api_pb = require('./api_pb.js');

function serialize_proto_CreateStreamRequest(arg) {
  if (!(arg instanceof api_pb.CreateStreamRequest)) {
    throw new Error('Expected argument of type proto.CreateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CreateStreamRequest(buffer_arg) {
  return api_pb.CreateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CreateStreamResponse(arg) {
  if (!(arg instanceof api_pb.CreateStreamResponse)) {
    throw new Error('Expected argument of type proto.CreateStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CreateStreamResponse(buffer_arg) {
  return api_pb.CreateStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteStreamRequest(arg) {
  if (!(arg instanceof api_pb.DeleteStreamRequest)) {
    throw new Error('Expected argument of type proto.DeleteStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteStreamRequest(buffer_arg) {
  return api_pb.DeleteStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_DeleteStreamResponse(arg) {
  if (!(arg instanceof api_pb.DeleteStreamResponse)) {
    throw new Error('Expected argument of type proto.DeleteStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_DeleteStreamResponse(buffer_arg) {
  return api_pb.DeleteStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_FetchCursorRequest(arg) {
  if (!(arg instanceof api_pb.FetchCursorRequest)) {
    throw new Error('Expected argument of type proto.FetchCursorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_FetchCursorRequest(buffer_arg) {
  return api_pb.FetchCursorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_FetchCursorResponse(arg) {
  if (!(arg instanceof api_pb.FetchCursorResponse)) {
    throw new Error('Expected argument of type proto.FetchCursorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_FetchCursorResponse(buffer_arg) {
  return api_pb.FetchCursorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_FetchMetadataRequest(arg) {
  if (!(arg instanceof api_pb.FetchMetadataRequest)) {
    throw new Error('Expected argument of type proto.FetchMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_FetchMetadataRequest(buffer_arg) {
  return api_pb.FetchMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_FetchMetadataResponse(arg) {
  if (!(arg instanceof api_pb.FetchMetadataResponse)) {
    throw new Error('Expected argument of type proto.FetchMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_FetchMetadataResponse(buffer_arg) {
  return api_pb.FetchMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_FetchPartitionMetadataRequest(arg) {
  if (!(arg instanceof api_pb.FetchPartitionMetadataRequest)) {
    throw new Error('Expected argument of type proto.FetchPartitionMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_FetchPartitionMetadataRequest(buffer_arg) {
  return api_pb.FetchPartitionMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_FetchPartitionMetadataResponse(arg) {
  if (!(arg instanceof api_pb.FetchPartitionMetadataResponse)) {
    throw new Error('Expected argument of type proto.FetchPartitionMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_FetchPartitionMetadataResponse(buffer_arg) {
  return api_pb.FetchPartitionMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Message(arg) {
  if (!(arg instanceof api_pb.Message)) {
    throw new Error('Expected argument of type proto.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Message(buffer_arg) {
  return api_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PauseStreamRequest(arg) {
  if (!(arg instanceof api_pb.PauseStreamRequest)) {
    throw new Error('Expected argument of type proto.PauseStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PauseStreamRequest(buffer_arg) {
  return api_pb.PauseStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PauseStreamResponse(arg) {
  if (!(arg instanceof api_pb.PauseStreamResponse)) {
    throw new Error('Expected argument of type proto.PauseStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PauseStreamResponse(buffer_arg) {
  return api_pb.PauseStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PublishRequest(arg) {
  if (!(arg instanceof api_pb.PublishRequest)) {
    throw new Error('Expected argument of type proto.PublishRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PublishRequest(buffer_arg) {
  return api_pb.PublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PublishResponse(arg) {
  if (!(arg instanceof api_pb.PublishResponse)) {
    throw new Error('Expected argument of type proto.PublishResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PublishResponse(buffer_arg) {
  return api_pb.PublishResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PublishToSubjectRequest(arg) {
  if (!(arg instanceof api_pb.PublishToSubjectRequest)) {
    throw new Error('Expected argument of type proto.PublishToSubjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PublishToSubjectRequest(buffer_arg) {
  return api_pb.PublishToSubjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_PublishToSubjectResponse(arg) {
  if (!(arg instanceof api_pb.PublishToSubjectResponse)) {
    throw new Error('Expected argument of type proto.PublishToSubjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_PublishToSubjectResponse(buffer_arg) {
  return api_pb.PublishToSubjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetCursorRequest(arg) {
  if (!(arg instanceof api_pb.SetCursorRequest)) {
    throw new Error('Expected argument of type proto.SetCursorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetCursorRequest(buffer_arg) {
  return api_pb.SetCursorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetCursorResponse(arg) {
  if (!(arg instanceof api_pb.SetCursorResponse)) {
    throw new Error('Expected argument of type proto.SetCursorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetCursorResponse(buffer_arg) {
  return api_pb.SetCursorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetStreamReadonlyRequest(arg) {
  if (!(arg instanceof api_pb.SetStreamReadonlyRequest)) {
    throw new Error('Expected argument of type proto.SetStreamReadonlyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetStreamReadonlyRequest(buffer_arg) {
  return api_pb.SetStreamReadonlyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SetStreamReadonlyResponse(arg) {
  if (!(arg instanceof api_pb.SetStreamReadonlyResponse)) {
    throw new Error('Expected argument of type proto.SetStreamReadonlyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SetStreamReadonlyResponse(buffer_arg) {
  return api_pb.SetStreamReadonlyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_SubscribeRequest(arg) {
  if (!(arg instanceof api_pb.SubscribeRequest)) {
    throw new Error('Expected argument of type proto.SubscribeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_SubscribeRequest(buffer_arg) {
  return api_pb.SubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// API is the main Liftbridge server interface clients interact with.
var APIService = exports.APIService = {
  // CreateStream creates a new stream attached to a NATS subject. It returns
// an AlreadyExists status code if a stream with the given subject and name
// already exists.
createStream: {
    path: '/proto.API/CreateStream',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.CreateStreamRequest,
    responseType: api_pb.CreateStreamResponse,
    requestSerialize: serialize_proto_CreateStreamRequest,
    requestDeserialize: deserialize_proto_CreateStreamRequest,
    responseSerialize: serialize_proto_CreateStreamResponse,
    responseDeserialize: deserialize_proto_CreateStreamResponse,
  },
  // DeleteStream deletes a stream.
deleteStream: {
    path: '/proto.API/DeleteStream',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.DeleteStreamRequest,
    responseType: api_pb.DeleteStreamResponse,
    requestSerialize: serialize_proto_DeleteStreamRequest,
    requestDeserialize: deserialize_proto_DeleteStreamRequest,
    responseSerialize: serialize_proto_DeleteStreamResponse,
    responseDeserialize: deserialize_proto_DeleteStreamResponse,
  },
  // PauseStream pauses a stream's partitions. If no partitions are
// specified, all of the stream's partitions will be paused. Partitions are
// resumed when they are published to via the Liftbridge Publish API.
pauseStream: {
    path: '/proto.API/PauseStream',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PauseStreamRequest,
    responseType: api_pb.PauseStreamResponse,
    requestSerialize: serialize_proto_PauseStreamRequest,
    requestDeserialize: deserialize_proto_PauseStreamRequest,
    responseSerialize: serialize_proto_PauseStreamResponse,
    responseDeserialize: deserialize_proto_PauseStreamResponse,
  },
  // SetStreamReadonly sets a read-only flag to a partition. Returns a
// NoSuchStream error code if the given stream or partition does not exist.
setStreamReadonly: {
    path: '/proto.API/SetStreamReadonly',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.SetStreamReadonlyRequest,
    responseType: api_pb.SetStreamReadonlyResponse,
    requestSerialize: serialize_proto_SetStreamReadonlyRequest,
    requestDeserialize: deserialize_proto_SetStreamReadonlyRequest,
    responseSerialize: serialize_proto_SetStreamReadonlyResponse,
    responseDeserialize: deserialize_proto_SetStreamReadonlyResponse,
  },
  // Subscribe creates an ephemeral subscription for the given stream. It
// begins to receive messages starting at the given offset and waits for
// new messages when it reaches the end of the stream. Use the request
// context to close the subscription.
subscribe: {
    path: '/proto.API/Subscribe',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.SubscribeRequest,
    responseType: api_pb.Message,
    requestSerialize: serialize_proto_SubscribeRequest,
    requestDeserialize: deserialize_proto_SubscribeRequest,
    responseSerialize: serialize_proto_Message,
    responseDeserialize: deserialize_proto_Message,
  },
  // FetchMetadata retrieves the latest cluster metadata, including stream
// broker information.
fetchMetadata: {
    path: '/proto.API/FetchMetadata',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.FetchMetadataRequest,
    responseType: api_pb.FetchMetadataResponse,
    requestSerialize: serialize_proto_FetchMetadataRequest,
    requestDeserialize: deserialize_proto_FetchMetadataRequest,
    responseSerialize: serialize_proto_FetchMetadataResponse,
    responseDeserialize: deserialize_proto_FetchMetadataResponse,
  },
  // FetchPartitionMetadata retrieves the latest partition metadata from partition leader
// The main interest is to retrieve Highest Watermark and Newest Offset
fetchPartitionMetadata: {
    path: '/proto.API/FetchPartitionMetadata',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.FetchPartitionMetadataRequest,
    responseType: api_pb.FetchPartitionMetadataResponse,
    requestSerialize: serialize_proto_FetchPartitionMetadataRequest,
    requestDeserialize: deserialize_proto_FetchPartitionMetadataRequest,
    responseSerialize: serialize_proto_FetchPartitionMetadataResponse,
    responseDeserialize: deserialize_proto_FetchPartitionMetadataResponse,
  },
  // Publish a new message to a stream. If the AckPolicy is not NONE and a
// deadline is provided, this will synchronously block until the ack is
// received. If the ack is not received in time, a DeadlineExceeded status
// code is returned.
publish: {
    path: '/proto.API/Publish',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PublishRequest,
    responseType: api_pb.PublishResponse,
    requestSerialize: serialize_proto_PublishRequest,
    requestDeserialize: deserialize_proto_PublishRequest,
    responseSerialize: serialize_proto_PublishResponse,
    responseDeserialize: deserialize_proto_PublishResponse,
  },
  // PublishAsync is used to asynchronously publish messages to a stream in a
// pipelined fashion. This returns a stream which will yield
// PublishResponses for messages whose AckPolicy is not NONE.
publishAsync: {
    path: '/proto.API/PublishAsync',
    requestStream: true,
    responseStream: true,
    requestType: api_pb.PublishRequest,
    responseType: api_pb.PublishResponse,
    requestSerialize: serialize_proto_PublishRequest,
    requestDeserialize: deserialize_proto_PublishRequest,
    responseSerialize: serialize_proto_PublishResponse,
    responseDeserialize: deserialize_proto_PublishResponse,
  },
  // Publish a Liftbridge message to a NATS subject. If the AckPolicy is not NONE and a
// deadline is provided, this will synchronously block until the first ack
// is received. If an ack is not received in time, a DeadlineExceeded
// status code is returned.
publishToSubject: {
    path: '/proto.API/PublishToSubject',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PublishToSubjectRequest,
    responseType: api_pb.PublishToSubjectResponse,
    requestSerialize: serialize_proto_PublishToSubjectRequest,
    requestDeserialize: deserialize_proto_PublishToSubjectRequest,
    responseSerialize: serialize_proto_PublishToSubjectResponse,
    responseDeserialize: deserialize_proto_PublishToSubjectResponse,
  },
  // SetCursor stores a cursor position for a particular stream partition
// which is uniquely identified by an opaque string.
//
// NOTE: This is a beta endpoint and is subject to change. It is not
// included as part of Liftbridge's semantic versioning scheme.
setCursor: {
    path: '/proto.API/SetCursor',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.SetCursorRequest,
    responseType: api_pb.SetCursorResponse,
    requestSerialize: serialize_proto_SetCursorRequest,
    requestDeserialize: deserialize_proto_SetCursorRequest,
    responseSerialize: serialize_proto_SetCursorResponse,
    responseDeserialize: deserialize_proto_SetCursorResponse,
  },
  // FetchCursor retrieves a partition cursor position.
//
// NOTE: This is a beta endpoint and is subject to change. It is not
// included as part of Liftbridge's semantic versioning scheme.
fetchCursor: {
    path: '/proto.API/FetchCursor',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.FetchCursorRequest,
    responseType: api_pb.FetchCursorResponse,
    requestSerialize: serialize_proto_FetchCursorRequest,
    requestDeserialize: deserialize_proto_FetchCursorRequest,
    responseSerialize: serialize_proto_FetchCursorResponse,
    responseDeserialize: deserialize_proto_FetchCursorResponse,
  },
};

exports.APIClient = grpc.makeGenericClientConstructor(APIService);
