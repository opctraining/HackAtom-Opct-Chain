/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hackatomopctchain.challenge";

export interface ChallengeInfo {
  index: string;
  name: string;
  category: string;
  score: string;
  rewardId: string;
  creator: string;
}

const baseChallengeInfo: object = {
  index: "",
  name: "",
  category: "",
  score: "",
  rewardId: "",
  creator: "",
};

export const ChallengeInfo = {
  encode(message: ChallengeInfo, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.category !== "") {
      writer.uint32(26).string(message.category);
    }
    if (message.score !== "") {
      writer.uint32(34).string(message.score);
    }
    if (message.rewardId !== "") {
      writer.uint32(42).string(message.rewardId);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ChallengeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChallengeInfo } as ChallengeInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.category = reader.string();
          break;
        case 4:
          message.score = reader.string();
          break;
        case 5:
          message.rewardId = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeInfo {
    const message = { ...baseChallengeInfo } as ChallengeInfo;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: ChallengeInfo): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    message.category !== undefined && (obj.category = message.category);
    message.score !== undefined && (obj.score = message.score);
    message.rewardId !== undefined && (obj.rewardId = message.rewardId);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<ChallengeInfo>): ChallengeInfo {
    const message = { ...baseChallengeInfo } as ChallengeInfo;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

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
