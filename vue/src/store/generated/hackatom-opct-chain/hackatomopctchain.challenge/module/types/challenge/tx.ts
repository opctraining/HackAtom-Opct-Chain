/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "hackatomopctchain.challenge";

export interface MsgCreateChallengeInfo {
  creator: string;
  index: string;
  name: string;
  category: string;
  score: string;
  rewardId: string;
}

export interface MsgCreateChallengeInfoResponse {}

export interface MsgUpdateChallengeInfo {
  creator: string;
  index: string;
  name: string;
  category: string;
  score: string;
  rewardId: string;
}

export interface MsgUpdateChallengeInfoResponse {}

export interface MsgDeleteChallengeInfo {
  creator: string;
  index: string;
}

export interface MsgDeleteChallengeInfoResponse {}

const baseMsgCreateChallengeInfo: object = {
  creator: "",
  index: "",
  name: "",
  category: "",
  score: "",
  rewardId: "",
};

export const MsgCreateChallengeInfo = {
  encode(
    message: MsgCreateChallengeInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.category !== "") {
      writer.uint32(34).string(message.category);
    }
    if (message.score !== "") {
      writer.uint32(42).string(message.score);
    }
    if (message.rewardId !== "") {
      writer.uint32(50).string(message.rewardId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateChallengeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateChallengeInfo } as MsgCreateChallengeInfo;
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
          message.name = reader.string();
          break;
        case 4:
          message.category = reader.string();
          break;
        case 5:
          message.score = reader.string();
          break;
        case 6:
          message.rewardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateChallengeInfo {
    const message = { ...baseMsgCreateChallengeInfo } as MsgCreateChallengeInfo;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = String(object.category);
    } else {
      message.category = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = String(object.score);
    } else {
      message.score = "";
    }
    if (object.rewardId !== undefined && object.rewardId !== null) {
      message.rewardId = String(object.rewardId);
    } else {
      message.rewardId = "";
    }
    return message;
  },

  toJSON(message: MsgCreateChallengeInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    message.category !== undefined && (obj.category = message.category);
    message.score !== undefined && (obj.score = message.score);
    message.rewardId !== undefined && (obj.rewardId = message.rewardId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateChallengeInfo>
  ): MsgCreateChallengeInfo {
    const message = { ...baseMsgCreateChallengeInfo } as MsgCreateChallengeInfo;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = "";
    }
    if (object.rewardId !== undefined && object.rewardId !== null) {
      message.rewardId = object.rewardId;
    } else {
      message.rewardId = "";
    }
    return message;
  },
};

const baseMsgCreateChallengeInfoResponse: object = {};

export const MsgCreateChallengeInfoResponse = {
  encode(
    _: MsgCreateChallengeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateChallengeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateChallengeInfoResponse,
    } as MsgCreateChallengeInfoResponse;
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

  fromJSON(_: any): MsgCreateChallengeInfoResponse {
    const message = {
      ...baseMsgCreateChallengeInfoResponse,
    } as MsgCreateChallengeInfoResponse;
    return message;
  },

  toJSON(_: MsgCreateChallengeInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateChallengeInfoResponse>
  ): MsgCreateChallengeInfoResponse {
    const message = {
      ...baseMsgCreateChallengeInfoResponse,
    } as MsgCreateChallengeInfoResponse;
    return message;
  },
};

const baseMsgUpdateChallengeInfo: object = {
  creator: "",
  index: "",
  name: "",
  category: "",
  score: "",
  rewardId: "",
};

export const MsgUpdateChallengeInfo = {
  encode(
    message: MsgUpdateChallengeInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.category !== "") {
      writer.uint32(34).string(message.category);
    }
    if (message.score !== "") {
      writer.uint32(42).string(message.score);
    }
    if (message.rewardId !== "") {
      writer.uint32(50).string(message.rewardId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateChallengeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateChallengeInfo } as MsgUpdateChallengeInfo;
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
          message.name = reader.string();
          break;
        case 4:
          message.category = reader.string();
          break;
        case 5:
          message.score = reader.string();
          break;
        case 6:
          message.rewardId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateChallengeInfo {
    const message = { ...baseMsgUpdateChallengeInfo } as MsgUpdateChallengeInfo;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = String(object.category);
    } else {
      message.category = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = String(object.score);
    } else {
      message.score = "";
    }
    if (object.rewardId !== undefined && object.rewardId !== null) {
      message.rewardId = String(object.rewardId);
    } else {
      message.rewardId = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateChallengeInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    message.category !== undefined && (obj.category = message.category);
    message.score !== undefined && (obj.score = message.score);
    message.rewardId !== undefined && (obj.rewardId = message.rewardId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateChallengeInfo>
  ): MsgUpdateChallengeInfo {
    const message = { ...baseMsgUpdateChallengeInfo } as MsgUpdateChallengeInfo;
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = "";
    }
    if (object.rewardId !== undefined && object.rewardId !== null) {
      message.rewardId = object.rewardId;
    } else {
      message.rewardId = "";
    }
    return message;
  },
};

const baseMsgUpdateChallengeInfoResponse: object = {};

export const MsgUpdateChallengeInfoResponse = {
  encode(
    _: MsgUpdateChallengeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateChallengeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateChallengeInfoResponse,
    } as MsgUpdateChallengeInfoResponse;
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

  fromJSON(_: any): MsgUpdateChallengeInfoResponse {
    const message = {
      ...baseMsgUpdateChallengeInfoResponse,
    } as MsgUpdateChallengeInfoResponse;
    return message;
  },

  toJSON(_: MsgUpdateChallengeInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateChallengeInfoResponse>
  ): MsgUpdateChallengeInfoResponse {
    const message = {
      ...baseMsgUpdateChallengeInfoResponse,
    } as MsgUpdateChallengeInfoResponse;
    return message;
  },
};

const baseMsgDeleteChallengeInfo: object = { creator: "", index: "" };

export const MsgDeleteChallengeInfo = {
  encode(
    message: MsgDeleteChallengeInfo,
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteChallengeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteChallengeInfo } as MsgDeleteChallengeInfo;
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

  fromJSON(object: any): MsgDeleteChallengeInfo {
    const message = { ...baseMsgDeleteChallengeInfo } as MsgDeleteChallengeInfo;
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

  toJSON(message: MsgDeleteChallengeInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteChallengeInfo>
  ): MsgDeleteChallengeInfo {
    const message = { ...baseMsgDeleteChallengeInfo } as MsgDeleteChallengeInfo;
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

const baseMsgDeleteChallengeInfoResponse: object = {};

export const MsgDeleteChallengeInfoResponse = {
  encode(
    _: MsgDeleteChallengeInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteChallengeInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteChallengeInfoResponse,
    } as MsgDeleteChallengeInfoResponse;
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

  fromJSON(_: any): MsgDeleteChallengeInfoResponse {
    const message = {
      ...baseMsgDeleteChallengeInfoResponse,
    } as MsgDeleteChallengeInfoResponse;
    return message;
  },

  toJSON(_: MsgDeleteChallengeInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteChallengeInfoResponse>
  ): MsgDeleteChallengeInfoResponse {
    const message = {
      ...baseMsgDeleteChallengeInfoResponse,
    } as MsgDeleteChallengeInfoResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateChallengeInfo(
    request: MsgCreateChallengeInfo
  ): Promise<MsgCreateChallengeInfoResponse>;
  UpdateChallengeInfo(
    request: MsgUpdateChallengeInfo
  ): Promise<MsgUpdateChallengeInfoResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteChallengeInfo(
    request: MsgDeleteChallengeInfo
  ): Promise<MsgDeleteChallengeInfoResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateChallengeInfo(
    request: MsgCreateChallengeInfo
  ): Promise<MsgCreateChallengeInfoResponse> {
    const data = MsgCreateChallengeInfo.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.challenge.Msg",
      "CreateChallengeInfo",
      data
    );
    return promise.then((data) =>
      MsgCreateChallengeInfoResponse.decode(new Reader(data))
    );
  }

  UpdateChallengeInfo(
    request: MsgUpdateChallengeInfo
  ): Promise<MsgUpdateChallengeInfoResponse> {
    const data = MsgUpdateChallengeInfo.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.challenge.Msg",
      "UpdateChallengeInfo",
      data
    );
    return promise.then((data) =>
      MsgUpdateChallengeInfoResponse.decode(new Reader(data))
    );
  }

  DeleteChallengeInfo(
    request: MsgDeleteChallengeInfo
  ): Promise<MsgDeleteChallengeInfoResponse> {
    const data = MsgDeleteChallengeInfo.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.challenge.Msg",
      "DeleteChallengeInfo",
      data
    );
    return promise.then((data) =>
      MsgDeleteChallengeInfoResponse.decode(new Reader(data))
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
