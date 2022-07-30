/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../challenge/params";
import { ChallengeInfo } from "../challenge/challenge_info";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "hackatomopctchain.challenge";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetChallengeInfoRequest {
  index: string;
}

export interface QueryGetChallengeInfoResponse {
  challengeInfo: ChallengeInfo | undefined;
}

export interface QueryAllChallengeInfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllChallengeInfoResponse {
  challengeInfo: ChallengeInfo[];
  pagination: PageResponse | undefined;
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

const baseQueryGetChallengeInfoRequest: object = { index: "" };

export const QueryGetChallengeInfoRequest = {
  encode(
    message: QueryGetChallengeInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetChallengeInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetChallengeInfoRequest,
    } as QueryGetChallengeInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetChallengeInfoRequest {
    const message = {
      ...baseQueryGetChallengeInfoRequest,
    } as QueryGetChallengeInfoRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetChallengeInfoRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetChallengeInfoRequest>
  ): QueryGetChallengeInfoRequest {
    const message = {
      ...baseQueryGetChallengeInfoRequest,
    } as QueryGetChallengeInfoRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetChallengeInfoResponse: object = {};

export const QueryGetChallengeInfoResponse = {
  encode(
    message: QueryGetChallengeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.challengeInfo !== undefined) {
      ChallengeInfo.encode(
        message.challengeInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetChallengeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetChallengeInfoResponse,
    } as QueryGetChallengeInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeInfo = ChallengeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetChallengeInfoResponse {
    const message = {
      ...baseQueryGetChallengeInfoResponse,
    } as QueryGetChallengeInfoResponse;
    if (object.challengeInfo !== undefined && object.challengeInfo !== null) {
      message.challengeInfo = ChallengeInfo.fromJSON(object.challengeInfo);
    } else {
      message.challengeInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetChallengeInfoResponse): unknown {
    const obj: any = {};
    message.challengeInfo !== undefined &&
      (obj.challengeInfo = message.challengeInfo
        ? ChallengeInfo.toJSON(message.challengeInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetChallengeInfoResponse>
  ): QueryGetChallengeInfoResponse {
    const message = {
      ...baseQueryGetChallengeInfoResponse,
    } as QueryGetChallengeInfoResponse;
    if (object.challengeInfo !== undefined && object.challengeInfo !== null) {
      message.challengeInfo = ChallengeInfo.fromPartial(object.challengeInfo);
    } else {
      message.challengeInfo = undefined;
    }
    return message;
  },
};

const baseQueryAllChallengeInfoRequest: object = {};

export const QueryAllChallengeInfoRequest = {
  encode(
    message: QueryAllChallengeInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllChallengeInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllChallengeInfoRequest,
    } as QueryAllChallengeInfoRequest;
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

  fromJSON(object: any): QueryAllChallengeInfoRequest {
    const message = {
      ...baseQueryAllChallengeInfoRequest,
    } as QueryAllChallengeInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllChallengeInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllChallengeInfoRequest>
  ): QueryAllChallengeInfoRequest {
    const message = {
      ...baseQueryAllChallengeInfoRequest,
    } as QueryAllChallengeInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllChallengeInfoResponse: object = {};

export const QueryAllChallengeInfoResponse = {
  encode(
    message: QueryAllChallengeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.challengeInfo) {
      ChallengeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllChallengeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllChallengeInfoResponse,
    } as QueryAllChallengeInfoResponse;
    message.challengeInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeInfo.push(
            ChallengeInfo.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllChallengeInfoResponse {
    const message = {
      ...baseQueryAllChallengeInfoResponse,
    } as QueryAllChallengeInfoResponse;
    message.challengeInfo = [];
    if (object.challengeInfo !== undefined && object.challengeInfo !== null) {
      for (const e of object.challengeInfo) {
        message.challengeInfo.push(ChallengeInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllChallengeInfoResponse): unknown {
    const obj: any = {};
    if (message.challengeInfo) {
      obj.challengeInfo = message.challengeInfo.map((e) =>
        e ? ChallengeInfo.toJSON(e) : undefined
      );
    } else {
      obj.challengeInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllChallengeInfoResponse>
  ): QueryAllChallengeInfoResponse {
    const message = {
      ...baseQueryAllChallengeInfoResponse,
    } as QueryAllChallengeInfoResponse;
    message.challengeInfo = [];
    if (object.challengeInfo !== undefined && object.challengeInfo !== null) {
      for (const e of object.challengeInfo) {
        message.challengeInfo.push(ChallengeInfo.fromPartial(e));
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a ChallengeInfo by index. */
  ChallengeInfo(
    request: QueryGetChallengeInfoRequest
  ): Promise<QueryGetChallengeInfoResponse>;
  /** Queries a list of ChallengeInfo items. */
  ChallengeInfoAll(
    request: QueryAllChallengeInfoRequest
  ): Promise<QueryAllChallengeInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.challenge.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  ChallengeInfo(
    request: QueryGetChallengeInfoRequest
  ): Promise<QueryGetChallengeInfoResponse> {
    const data = QueryGetChallengeInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.challenge.Query",
      "ChallengeInfo",
      data
    );
    return promise.then((data) =>
      QueryGetChallengeInfoResponse.decode(new Reader(data))
    );
  }

  ChallengeInfoAll(
    request: QueryAllChallengeInfoRequest
  ): Promise<QueryAllChallengeInfoResponse> {
    const data = QueryAllChallengeInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.challenge.Query",
      "ChallengeInfoAll",
      data
    );
    return promise.then((data) =>
      QueryAllChallengeInfoResponse.decode(new Reader(data))
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
