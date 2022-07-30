/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hackatomopctchain.hackatomopctchain";

export interface Challenge {
  id: number;
  creator: string;
  category: string;
  date: number;
  uri: string;
  rewardId: number;
}

const baseChallenge: object = {
  id: 0,
  creator: "",
  category: "",
  date: 0,
  uri: "",
  rewardId: 0,
};

export const Challenge = {
  encode(message: Challenge, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.category !== "") {
      writer.uint32(26).string(message.category);
    }
    if (message.date !== 0) {
      writer.uint32(32).int64(message.date);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.rewardId !== 0) {
      writer.uint32(48).uint64(message.rewardId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Challenge {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChallenge } as Challenge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.category = reader.string();
          break;
        case 4:
          message.date = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.rewardId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Challenge {
    const message = { ...baseChallenge } as Challenge;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = String(object.category);
    } else {
      message.category = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = Number(object.date);
    } else {
      message.date = 0;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.rewardId !== undefined && object.rewardId !== null) {
      message.rewardId = Number(object.rewardId);
    } else {
      message.rewardId = 0;
    }
    return message;
  },

  toJSON(message: Challenge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.category !== undefined && (obj.category = message.category);
    message.date !== undefined && (obj.date = message.date);
    message.uri !== undefined && (obj.uri = message.uri);
    message.rewardId !== undefined && (obj.rewardId = message.rewardId);
    return obj;
  },

  fromPartial(object: DeepPartial<Challenge>): Challenge {
    const message = { ...baseChallenge } as Challenge;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = 0;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.rewardId !== undefined && object.rewardId !== null) {
      message.rewardId = object.rewardId;
    } else {
      message.rewardId = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
