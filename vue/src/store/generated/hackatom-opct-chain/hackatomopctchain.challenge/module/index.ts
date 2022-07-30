// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateChallengeInfo } from "./types/challenge/tx";
import { MsgUpdateChallengeInfo } from "./types/challenge/tx";
import { MsgDeleteChallengeInfo } from "./types/challenge/tx";


const types = [
  ["/hackatomopctchain.challenge.MsgCreateChallengeInfo", MsgCreateChallengeInfo],
  ["/hackatomopctchain.challenge.MsgUpdateChallengeInfo", MsgUpdateChallengeInfo],
  ["/hackatomopctchain.challenge.MsgDeleteChallengeInfo", MsgDeleteChallengeInfo],
  
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
    msgCreateChallengeInfo: (data: MsgCreateChallengeInfo): EncodeObject => ({ typeUrl: "/hackatomopctchain.challenge.MsgCreateChallengeInfo", value: MsgCreateChallengeInfo.fromPartial( data ) }),
    msgUpdateChallengeInfo: (data: MsgUpdateChallengeInfo): EncodeObject => ({ typeUrl: "/hackatomopctchain.challenge.MsgUpdateChallengeInfo", value: MsgUpdateChallengeInfo.fromPartial( data ) }),
    msgDeleteChallengeInfo: (data: MsgDeleteChallengeInfo): EncodeObject => ({ typeUrl: "/hackatomopctchain.challenge.MsgDeleteChallengeInfo", value: MsgDeleteChallengeInfo.fromPartial( data ) }),
    
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
