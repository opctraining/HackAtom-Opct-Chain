/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "hackatomopctchain.exercise";

export interface MsgCreateExercise {
  creator: string;
  category: string;
  score: number;
  starttime: number;
  endtime: number;
}

export interface MsgCreateExerciseResponse {
  success: boolean;
}

const baseMsgCreateExercise: object = {
  creator: "",
  category: "",
  score: 0,
  starttime: 0,
  endtime: 0,
};

export const MsgCreateExercise = {
  encode(message: MsgCreateExercise, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.category !== "") {
      writer.uint32(18).string(message.category);
    }
    if (message.score !== 0) {
      writer.uint32(24).uint64(message.score);
    }
    if (message.starttime !== 0) {
      writer.uint32(32).int64(message.starttime);
    }
    if (message.endtime !== 0) {
      writer.uint32(40).int64(message.endtime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateExercise {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateExercise } as MsgCreateExercise;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.category = reader.string();
          break;
        case 3:
          message.score = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.starttime = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.endtime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateExercise {
    const message = { ...baseMsgCreateExercise } as MsgCreateExercise;
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
    if (object.score !== undefined && object.score !== null) {
      message.score = Number(object.score);
    } else {
      message.score = 0;
    }
    if (object.starttime !== undefined && object.starttime !== null) {
      message.starttime = Number(object.starttime);
    } else {
      message.starttime = 0;
    }
    if (object.endtime !== undefined && object.endtime !== null) {
      message.endtime = Number(object.endtime);
    } else {
      message.endtime = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateExercise): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.category !== undefined && (obj.category = message.category);
    message.score !== undefined && (obj.score = message.score);
    message.starttime !== undefined && (obj.starttime = message.starttime);
    message.endtime !== undefined && (obj.endtime = message.endtime);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateExercise>): MsgCreateExercise {
    const message = { ...baseMsgCreateExercise } as MsgCreateExercise;
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
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = 0;
    }
    if (object.starttime !== undefined && object.starttime !== null) {
      message.starttime = object.starttime;
    } else {
      message.starttime = 0;
    }
    if (object.endtime !== undefined && object.endtime !== null) {
      message.endtime = object.endtime;
    } else {
      message.endtime = 0;
    }
    return message;
  },
};

const baseMsgCreateExerciseResponse: object = { success: false };

export const MsgCreateExerciseResponse = {
  encode(
    message: MsgCreateExerciseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateExerciseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateExerciseResponse,
    } as MsgCreateExerciseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateExerciseResponse {
    const message = {
      ...baseMsgCreateExerciseResponse,
    } as MsgCreateExerciseResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    return message;
  },

  toJSON(message: MsgCreateExerciseResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateExerciseResponse>
  ): MsgCreateExerciseResponse {
    const message = {
      ...baseMsgCreateExerciseResponse,
    } as MsgCreateExerciseResponse;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateExercise(
    request: MsgCreateExercise
  ): Promise<MsgCreateExerciseResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateExercise(
    request: MsgCreateExercise
  ): Promise<MsgCreateExerciseResponse> {
    const data = MsgCreateExercise.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.exercise.Msg",
      "CreateExercise",
      data
    );
    return promise.then((data) =>
      MsgCreateExerciseResponse.decode(new Reader(data))
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
