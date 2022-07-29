package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "hackatom-opct-chain/testutil/keeper"
	"hackatom-opct-chain/x/hackatomopctchain/keeper"
	"hackatom-opct-chain/x/hackatomopctchain/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.HackatomopctchainKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
