package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"hackatom-opct-chain/x/hackatomopctchain/types"
)

func (k msgServer) DoneOpct(goCtx context.Context, msg *types.MsgDoneOpct) (*types.MsgDoneOpctResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var exercise = types.Exercise{
		Creator:   msg.Creator,
		Category:  msg.Category,
		Score:     msg.Score,
		StartTime: msg.Starttime,
		EndTime:   msg.Endtime,
	}
	_ = k.StoreExercise(ctx, exercise)

	return &types.MsgDoneOpctResponse{}, nil
}
