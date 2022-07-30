/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../badge/params";
import { BadgeInfo } from "../badge/badge_info";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "hackatomopctchain.badge";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetBadgeInfoRequest {
  index: string;
}

export interface QueryGetBadgeInfoResponse {
  badgeInfo: BadgeInfo | undefined;
}

export interface QueryAllBadgeInfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllBadgeInfoResponse {
  badgeInfo: BadgeInfo[];
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

const baseQueryGetBadgeInfoRequest: object = { index: "" };

export const QueryGetBadgeInfoRequest = {
  encode(
    message: QueryGetBadgeInfoRequest,
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
  ): QueryGetBadgeInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBadgeInfoRequest,
    } as QueryGetBadgeInfoRequest;
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

  fromJSON(object: any): QueryGetBadgeInfoRequest {
    const message = {
      ...baseQueryGetBadgeInfoRequest,
    } as QueryGetBadgeInfoRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetBadgeInfoRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBadgeInfoRequest>
  ): QueryGetBadgeInfoRequest {
    const message = {
      ...baseQueryGetBadgeInfoRequest,
    } as QueryGetBadgeInfoRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetBadgeInfoResponse: object = {};

export const QueryGetBadgeInfoResponse = {
  encode(
    message: QueryGetBadgeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.badgeInfo !== undefined) {
      BadgeInfo.encode(message.badgeInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBadgeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBadgeInfoResponse,
    } as QueryGetBadgeInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badgeInfo = BadgeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBadgeInfoResponse {
    const message = {
      ...baseQueryGetBadgeInfoResponse,
    } as QueryGetBadgeInfoResponse;
    if (object.badgeInfo !== undefined && object.badgeInfo !== null) {
      message.badgeInfo = BadgeInfo.fromJSON(object.badgeInfo);
    } else {
      message.badgeInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBadgeInfoResponse): unknown {
    const obj: any = {};
    message.badgeInfo !== undefined &&
      (obj.badgeInfo = message.badgeInfo
        ? BadgeInfo.toJSON(message.badgeInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBadgeInfoResponse>
  ): QueryGetBadgeInfoResponse {
    const message = {
      ...baseQueryGetBadgeInfoResponse,
    } as QueryGetBadgeInfoResponse;
    if (object.badgeInfo !== undefined && object.badgeInfo !== null) {
      message.badgeInfo = BadgeInfo.fromPartial(object.badgeInfo);
    } else {
      message.badgeInfo = undefined;
    }
    return message;
  },
};

const baseQueryAllBadgeInfoRequest: object = {};

export const QueryAllBadgeInfoRequest = {
  encode(
    message: QueryAllBadgeInfoRequest,
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
  ): QueryAllBadgeInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBadgeInfoRequest,
    } as QueryAllBadgeInfoRequest;
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

  fromJSON(object: any): QueryAllBadgeInfoRequest {
    const message = {
      ...baseQueryAllBadgeInfoRequest,
    } as QueryAllBadgeInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBadgeInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBadgeInfoRequest>
  ): QueryAllBadgeInfoRequest {
    const message = {
      ...baseQueryAllBadgeInfoRequest,
    } as QueryAllBadgeInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBadgeInfoResponse: object = {};

export const QueryAllBadgeInfoResponse = {
  encode(
    message: QueryAllBadgeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.badgeInfo) {
      BadgeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBadgeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBadgeInfoResponse,
    } as QueryAllBadgeInfoResponse;
    message.badgeInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.badgeInfo.push(BadgeInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllBadgeInfoResponse {
    const message = {
      ...baseQueryAllBadgeInfoResponse,
    } as QueryAllBadgeInfoResponse;
    message.badgeInfo = [];
    if (object.badgeInfo !== undefined && object.badgeInfo !== null) {
      for (const e of object.badgeInfo) {
        message.badgeInfo.push(BadgeInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBadgeInfoResponse): unknown {
    const obj: any = {};
    if (message.badgeInfo) {
      obj.badgeInfo = message.badgeInfo.map((e) =>
        e ? BadgeInfo.toJSON(e) : undefined
      );
    } else {
      obj.badgeInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBadgeInfoResponse>
  ): QueryAllBadgeInfoResponse {
    const message = {
      ...baseQueryAllBadgeInfoResponse,
    } as QueryAllBadgeInfoResponse;
    message.badgeInfo = [];
    if (object.badgeInfo !== undefined && object.badgeInfo !== null) {
      for (const e of object.badgeInfo) {
        message.badgeInfo.push(BadgeInfo.fromPartial(e));
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
  /** Queries a BadgeInfo by index. */
  BadgeInfo(
    request: QueryGetBadgeInfoRequest
  ): Promise<QueryGetBadgeInfoResponse>;
  /** Queries a list of BadgeInfo items. */
  BadgeInfoAll(
    request: QueryAllBadgeInfoRequest
  ): Promise<QueryAllBadgeInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.badge.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  BadgeInfo(
    request: QueryGetBadgeInfoRequest
  ): Promise<QueryGetBadgeInfoResponse> {
    const data = QueryGetBadgeInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.badge.Query",
      "BadgeInfo",
      data
    );
    return promise.then((data) =>
      QueryGetBadgeInfoResponse.decode(new Reader(data))
    );
  }

  BadgeInfoAll(
    request: QueryAllBadgeInfoRequest
  ): Promise<QueryAllBadgeInfoResponse> {
    const data = QueryAllBadgeInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.badge.Query",
      "BadgeInfoAll",
      data
    );
    return promise.then((data) =>
      QueryAllBadgeInfoResponse.decode(new Reader(data))
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
