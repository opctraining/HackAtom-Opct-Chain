package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"hackatom-opct-chain/x/hackatomopctchain/types"
)

func (k msgServer) DoneOpct(goCtx context.Context, msg *types.MsgDoneOpct) (*types.MsgDoneOpctResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgDoneOpctResponse{}, nil
}
