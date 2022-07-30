/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hackatomopctchain.badge";

export interface BadgeInfo {
  index: string;
  badgeId: string;
  name: string;
  creator: string;
}

const baseBadgeInfo: object = { index: "", badgeId: "", name: "", creator: "" };

export const BadgeInfo = {
  encode(message: BadgeInfo, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.badgeId !== "") {
      writer.uint32(18).string(message.badgeId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BadgeInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBadgeInfo } as BadgeInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.badgeId = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BadgeInfo {
    const message = { ...baseBadgeInfo } as BadgeInfo;
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: BadgeInfo): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.badgeId !== undefined && (obj.badgeId = message.badgeId);
    message.name !== undefined && (obj.name = message.name);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<BadgeInfo>): BadgeInfo {
    const message = { ...baseBadgeInfo } as BadgeInfo;
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
