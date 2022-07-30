/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "hackatomopctchain.hackatomopctchain";

export interface MsgDoneOpct {
  creator: string;
  category: string;
  score: string;
  starttime: string;
  endtime: string;
}

export interface MsgDoneOpctResponse {}

const baseMsgDoneOpct: object = {
  creator: "",
  category: "",
  score: "",
  starttime: "",
  endtime: "",
};

export const MsgDoneOpct = {
  encode(message: MsgDoneOpct, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.category !== "") {
      writer.uint32(18).string(message.category);
    }
    if (message.score !== "") {
      writer.uint32(26).string(message.score);
    }
    if (message.starttime !== "") {
      writer.uint32(34).string(message.starttime);
    }
    if (message.endtime !== "") {
      writer.uint32(42).string(message.endtime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDoneOpct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDoneOpct } as MsgDoneOpct;
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
          message.score = reader.string();
          break;
        case 4:
          message.starttime = reader.string();
          break;
        case 5:
          message.endtime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDoneOpct {
    const message = { ...baseMsgDoneOpct } as MsgDoneOpct;
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
      message.score = String(object.score);
    } else {
      message.score = "";
    }
    if (object.starttime !== undefined && object.starttime !== null) {
      message.starttime = String(object.starttime);
    } else {
      message.starttime = "";
    }
    if (object.endtime !== undefined && object.endtime !== null) {
      message.endtime = String(object.endtime);
    } else {
      message.endtime = "";
    }
    return message;
  },

  toJSON(message: MsgDoneOpct): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.category !== undefined && (obj.category = message.category);
    message.score !== undefined && (obj.score = message.score);
    message.starttime !== undefined && (obj.starttime = message.starttime);
    message.endtime !== undefined && (obj.endtime = message.endtime);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDoneOpct>): MsgDoneOpct {
    const message = { ...baseMsgDoneOpct } as MsgDoneOpct;
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
      message.score = "";
    }
    if (object.starttime !== undefined && object.starttime !== null) {
      message.starttime = object.starttime;
    } else {
      message.starttime = "";
    }
    if (object.endtime !== undefined && object.endtime !== null) {
      message.endtime = object.endtime;
    } else {
      message.endtime = "";
    }
    return message;
  },
};

const baseMsgDoneOpctResponse: object = {};

export const MsgDoneOpctResponse = {
  encode(_: MsgDoneOpctResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDoneOpctResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDoneOpctResponse } as MsgDoneOpctResponse;
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

  fromJSON(_: any): MsgDoneOpctResponse {
    const message = { ...baseMsgDoneOpctResponse } as MsgDoneOpctResponse;
    return message;
  },

  toJSON(_: MsgDoneOpctResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDoneOpctResponse>): MsgDoneOpctResponse {
    const message = { ...baseMsgDoneOpctResponse } as MsgDoneOpctResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DoneOpct(request: MsgDoneOpct): Promise<MsgDoneOpctResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  DoneOpct(request: MsgDoneOpct): Promise<MsgDoneOpctResponse> {
    const data = MsgDoneOpct.encode(request).finish();
    const promise = this.rpc.request(
      "hackatomopctchain.hackatomopctchain.Msg",
      "DoneOpct",
      data
    );
    return promise.then((data) => MsgDoneOpctResponse.decode(new Reader(data)));
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
