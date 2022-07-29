package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"hackatom-opct-chain/x/exercise/types"
)

func (k msgServer) CreateExercise(goCtx context.Context, msg *types.MsgCreateExercise) (*types.MsgCreateExerciseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var exercise = types.Exercise{
		Address:   msg.Creator,
		Category:  msg.Category,
		Score:     msg.Score,
		StartTime: msg.Starttime,
		EndTime:   msg.Endtime,
		CreatedAt: ctx.BlockHeight(),
	}

	success := k.StoreExercise(ctx, exercise)

	return &types.MsgCreateExerciseResponse{Success: success}, nil
}
