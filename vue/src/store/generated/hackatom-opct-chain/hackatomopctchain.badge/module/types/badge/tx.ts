/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "hackatomopctchain.badge";

export interface MsgCreateBadgeInfo {
  creator: string;
  index: string;
  badgeId: string;
  name: string;
}

export interface MsgCreateBadgeInfoResponse {}

export interface MsgUpdateBadgeInfo {
  creator: string;
  index: string;
  badgeId: string;
  name: string;
}

export interface MsgUpdateBadgeInfoResponse {}

export interface MsgDeleteBadgeInfo {
  creator: string;
  index: string;
}

export interface MsgDeleteBadgeInfoResponse {}

const baseMsgCreateBadgeInfo: object = {
  creator: "",
  index: "",
  badgeId: "",
  name: "",
};

export const MsgCreateBadgeInfo = {
  encode(
    message: MsgCreateBadgeInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.badgeId !== "") {
      writer.uint32(26).string(message.badgeId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBadgeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBadgeInfo } as MsgCreateBadgeInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.badgeId = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBadgeInfo {
    const message = { ...baseMsgCreateBadgeInfo } as MsgCreateBadgeInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.badgeId !== undefined && object.badgeId !== null) {
      message.badgeId = String(object.badgeId);
    } else {
      message.badgeId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgCreateBadgeInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.badgeId !== undefined && (obj.badgeId = message.badgeId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBadgeInfo>): MsgCreateBadgeInfo {
    const message = { ...baseMsgCreateBadgeInfo } as MsgCreateBadgeInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.badgeId !== undefined && object.badgeId !== null) {
      message.badgeId = object.badgeId;
    } else {
      message.badgeId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgCreateBadgeInfoResponse: object = {};

export const MsgCreateBadgeInfoResponse = {
  encode(
    _: MsgCreateBadgeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateBadgeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBadgeInfoResponse,
    } as MsgCreateBadgeInfoResponse;
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

  fromJSON(_: any): MsgCreateBadgeInfoResponse {
    const message = {
      ...baseMsgCreateBadgeInfoResponse,
    } as MsgCreateBadgeInfoResponse;
    return message;
  },

  toJSON(_: MsgCreateBadgeInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateBadgeInfoResponse>
  ): MsgCreateBadgeInfoResponse {
    const message = {
      ...baseMsgCreateBadgeInfoResponse,
    } as MsgCreateBadgeInfoResponse;
    return message;
  },
};

const baseMsgUpdateBadgeInfo: object = {
  creator: "",
  index: "",
  badgeId: "",
  name: "",
};

export const MsgUpdateBadgeInfo = {
  encode(
    message: MsgUpdateBadgeInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.badgeId !== "") {
      writer.uint32(26).string(message.badgeId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBadgeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBadgeInfo } as MsgUpdateBadgeInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.badgeId = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBadgeInfo {
    const message = { ...baseMsgUpdateBadgeInfo } as MsgUpdateBadgeInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.badgeId !== undefined && object.badgeId !== null) {
      message.badgeId = String(object.badgeId);
    } else {
      message.badgeId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBadgeInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.badgeId !== undefined && (obj.badgeId = message.badgeId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBadgeInfo>): MsgUpdateBadgeInfo {
    const message = { ...baseMsgUpdateBadgeInfo } as MsgUpdateBadgeInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.badgeId !== undefined && object.badgeId !== null) {
      message.badgeId = object.badgeId;
    } else {
      message.badgeId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgUpdateBadgeInfoResponse: object = {};

export const MsgUpdateBadgeInfoResponse = {
  encode(
    _: MsgUpdateBadgeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateBadgeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBadgeInfoResponse,
    } as MsgUpdateBadgeInfoResponse;
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

  fromJSON(_: any): MsgUpdateBadgeInfoResponse {
    const message = {
      ...baseMsgUpdateBadgeInfoResponse,
    } as MsgUpdateBadgeInfoResponse;
    return message;
  },

  toJSON(_: MsgUpdateBadgeInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateBadgeInfoResponse>
  ): MsgUpdateBadgeInfoResponse {
    const message = {
      ...baseMsgUpdateBadgeInfoResponse,
    } as MsgUpdateBadgeInfoResponse;
    return message;
  },
};

const baseMsgDeleteBadgeInfo: object = { creator: "", index: "" };

export const MsgDeleteBadgeInfo = {
  encode(
    message: MsgDeleteBadgeInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBadgeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBadgeInfo } as MsgDeleteBadgeInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBadgeInfo {
    const message = { ...baseMsgDeleteBadgeInfo } as MsgDeleteBadgeInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteBadgeInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBadgeInfo>): MsgDeleteBadgeInfo {
    const message = { ...baseMsgDeleteBadgeInfo } as MsgDeleteBadgeInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteBadgeInfoResponse: object = {};

export const MsgDeleteBadgeInfoResponse = {
  encode(
    _: MsgDeleteBadgeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteBadgeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBadgeInfoResponse,
    } as MsgDeleteBadgeInfoResponse;
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

  fromJSON(_: any): MsgDeleteBadgeInfoResponse {
    const message = {
      ...baseMsgDeleteBadgeInfoResponse,
    } as MsgDeleteBadgeInfoResponse;
    return message;
  },

  toJSON(_: MsgDeleteBadgeInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteBadgeInfoResponse>
  ): MsgDeleteBadgeInfoResponse {
    const message = {
      ...baseMsgDeleteBadgeInfoResponse,
    } as MsgDeleteBadgeInfoResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateBadgeInfo(
    request: MsgCreateBadgeInfo
  ): Promise<MsgCreateBadgeInfoResponse>;
  UpdateBadgeInfo(
    request: MsgUpdateBadgeInfo
  ): Promise<MsgUpdateBadgeInfoResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteBadgeInfo(
    request: MsgDeleteBadgeInfo
  ): Promise<MsgDeleteBadgeInfoResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateBadgeInfo(
    request: MsgCreateBadgeInfo
  ): Promise<MsgCreateBadgeInfoResponse> {
    const data = MsgCreateBadgeInfo.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.badge.Msg",
      "CreateBadgeInfo",
      data
    );
    return promise.then((data) =>
      MsgCreateBadgeInfoResponse.decode(new Reader(data))
    );
  }

  UpdateBadgeInfo(
    request: MsgUpdateBadgeInfo
  ): Promise<MsgUpdateBadgeInfoResponse> {
    const data = MsgUpdateBadgeInfo.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.badge.Msg",
      "UpdateBadgeInfo",
      data
    );
    return promise.then((data) =>
      MsgUpdateBadgeInfoResponse.decode(new Reader(data))
    );
  }

  DeleteBadgeInfo(
    request: MsgDeleteBadgeInfo
  ): Promise<MsgDeleteBadgeInfoResponse> {
    const data = MsgDeleteBadgeInfo.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.badge.Msg",
      "DeleteBadgeInfo",
      data
    );
    return promise.then((data) =>
      MsgDeleteBadgeInfoResponse.decode(new Reader(data))
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
