/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../hackatomopctchain/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Exercise } from "../hackatomopctchain/exercise";

export const protobufPackage = "hackatomopctchain.hackatomopctchain";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryExercisesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryExercisesResponse {
  Exercise: Exercise[];
  pagination: PageResponse | undefined;
}

export interface QueryChallengesRequest {
  date: string;
}

export interface QueryChallengesResponse {
  category: string;
  date: string;
  uri: string;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryExercisesRequest: object = {};

export const QueryExercisesRequest = {
  encode(
    message: QueryExercisesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryExercisesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryExercisesRequest } as QueryExercisesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExercisesRequest {
    const message = { ...baseQueryExercisesRequest } as QueryExercisesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryExercisesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryExercisesRequest>
  ): QueryExercisesRequest {
    const message = { ...baseQueryExercisesRequest } as QueryExercisesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryExercisesResponse: object = {};

export const QueryExercisesResponse = {
  encode(
    message: QueryExercisesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Exercise) {
      Exercise.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryExercisesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryExercisesResponse } as QueryExercisesResponse;
    message.Exercise = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Exercise.push(Exercise.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExercisesResponse {
    const message = { ...baseQueryExercisesResponse } as QueryExercisesResponse;
    message.Exercise = [];
    if (object.Exercise !== undefined && object.Exercise !== null) {
      for (const e of object.Exercise) {
        message.Exercise.push(Exercise.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryExercisesResponse): unknown {
    const obj: any = {};
    if (message.Exercise) {
      obj.Exercise = message.Exercise.map((e) =>
        e ? Exercise.toJSON(e) : undefined
      );
    } else {
      obj.Exercise = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryExercisesResponse>
  ): QueryExercisesResponse {
    const message = { ...baseQueryExercisesResponse } as QueryExercisesResponse;
    message.Exercise = [];
    if (object.Exercise !== undefined && object.Exercise !== null) {
      for (const e of object.Exercise) {
        message.Exercise.push(Exercise.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryChallengesRequest: object = { date: "" };

export const QueryChallengesRequest = {
  encode(
    message: QueryChallengesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.date !== "") {
      writer.uint32(10).string(message.date);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryChallengesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryChallengesRequest } as QueryChallengesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryChallengesRequest {
    const message = { ...baseQueryChallengesRequest } as QueryChallengesRequest;
    if (object.date !== undefined && object.date !== null) {
      message.date = String(object.date);
    } else {
      message.date = "";
    }
    return message;
  },

  toJSON(message: QueryChallengesRequest): unknown {
    const obj: any = {};
    message.date !== undefined && (obj.date = message.date);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryChallengesRequest>
  ): QueryChallengesRequest {
    const message = { ...baseQueryChallengesRequest } as QueryChallengesRequest;
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = "";
    }
    return message;
  },
};

const baseQueryChallengesResponse: object = { category: "", date: "", uri: "" };

export const QueryChallengesResponse = {
  encode(
    message: QueryChallengesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.category !== "") {
      writer.uint32(10).string(message.category);
    }
    if (message.date !== "") {
      writer.uint32(18).string(message.date);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryChallengesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryChallengesResponse,
    } as QueryChallengesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.string();
          break;
        case 2:
          message.date = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryChallengesResponse {
    const message = {
      ...baseQueryChallengesResponse,
    } as QueryChallengesResponse;
    if (object.category !== undefined && object.category !== null) {
      message.category = String(object.category);
    } else {
      message.category = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = String(object.date);
    } else {
      message.date = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    return message;
  },

  toJSON(message: QueryChallengesResponse): unknown {
    const obj: any = {};
    message.category !== undefined && (obj.category = message.category);
    message.date !== undefined && (obj.date = message.date);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryChallengesResponse>
  ): QueryChallengesResponse {
    const message = {
      ...baseQueryChallengesResponse,
    } as QueryChallengesResponse;
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Exercises items. */
  Exercises(request: QueryExercisesRequest): Promise<QueryExercisesResponse>;
  /** Queries a list of Challenges items. */
  Challenges(request: QueryChallengesRequest): Promise<QueryChallengesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.hackatomopctchain.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Exercises(request: QueryExercisesRequest): Promise<QueryExercisesResponse> {
    const data = QueryExercisesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.hackatomopctchain.Query",
      "Exercises",
      data
    );
    return promise.then((data) =>
      QueryExercisesResponse.decode(new Reader(data))
    );
  }

  Challenges(
    request: QueryChallengesRequest
  ): Promise<QueryChallengesResponse> {
    const data = QueryChallengesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.hackatomopctchain.Query",
      "Challenges",
      data
    );
    return promise.then((data) =>
      QueryChallengesResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
