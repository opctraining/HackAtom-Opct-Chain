// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateBadgeInfo } from "./types/badge/tx";
import { MsgDeleteBadgeInfo } from "./types/badge/tx";
import { MsgCreateBadgeInfo } from "./types/badge/tx";


const types = [
  ["/hackatomopctchain.badge.MsgUpdateBadgeInfo", MsgUpdateBadgeInfo],
  ["/hackatomopctchain.badge.MsgDeleteBadgeInfo", MsgDeleteBadgeInfo],
  ["/hackatomopctchain.badge.MsgCreateBadgeInfo", MsgCreateBadgeInfo],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateBadgeInfo: (data: MsgUpdateBadgeInfo): EncodeObject => ({ typeUrl: "/hackatomopctchain.badge.MsgUpdateBadgeInfo", value: MsgUpdateBadgeInfo.fromPartial( data ) }),
    msgDeleteBadgeInfo: (data: MsgDeleteBadgeInfo): EncodeObject => ({ typeUrl: "/hackatomopctchain.badge.MsgDeleteBadgeInfo", value: MsgDeleteBadgeInfo.fromPartial( data ) }),
    msgCreateBadgeInfo: (data: MsgCreateBadgeInfo): EncodeObject => ({ typeUrl: "/hackatomopctchain.badge.MsgCreateBadgeInfo", value: MsgCreateBadgeInfo.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
