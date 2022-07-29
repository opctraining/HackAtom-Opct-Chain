/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hackatomopctchain.exercise";

export interface Exercise {
  id: number;
  address: string;
  category: string;
  score: number;
  startTime: number;
  endTime: number;
  CreatedAt: number;
}

const baseExercise: object = {
  id: 0,
  address: "",
  category: "",
  score: 0,
  startTime: 0,
  endTime: 0,
  CreatedAt: 0,
};

export const Exercise = {
  encode(message: Exercise, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.category !== "") {
      writer.uint32(26).string(message.category);
    }
    if (message.score !== 0) {
      writer.uint32(32).uint64(message.score);
    }
    if (message.startTime !== 0) {
      writer.uint32(40).int64(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(48).int64(message.endTime);
    }
    if (message.CreatedAt !== 0) {
      writer.uint32(56).int64(message.CreatedAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Exercise {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExercise } as Exercise;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.category = reader.string();
          break;
        case 4:
          message.score = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.startTime = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.endTime = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.CreatedAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Exercise {
    const message = { ...baseExercise } as Exercise;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = String(object.category);
    } else {
      message.category = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = Number(object.score);
    } else {
      message.score = 0;
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Number(object.startTime);
    } else {
      message.startTime = 0;
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Number(object.endTime);
    } else {
      message.endTime = 0;
    }
    if (object.CreatedAt !== undefined && object.CreatedAt !== null) {
      message.CreatedAt = Number(object.CreatedAt);
    } else {
      message.CreatedAt = 0;
    }
    return message;
  },

  toJSON(message: Exercise): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined && (obj.address = message.address);
    message.category !== undefined && (obj.category = message.category);
    message.score !== undefined && (obj.score = message.score);
    message.startTime !== undefined && (obj.startTime = message.startTime);
    message.endTime !== undefined && (obj.endTime = message.endTime);
    message.CreatedAt !== undefined && (obj.CreatedAt = message.CreatedAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Exercise>): Exercise {
    const message = { ...baseExercise } as Exercise;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.category !== undefined && object.category !== null) {
      message.category = object.category;
    } else {
      message.category = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = 0;
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime;
    } else {
      message.startTime = 0;
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime;
    } else {
      message.endTime = 0;
    }
    if (object.CreatedAt !== undefined && object.CreatedAt !== null) {
      message.CreatedAt = object.CreatedAt;
    } else {
      message.CreatedAt = 0;
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
