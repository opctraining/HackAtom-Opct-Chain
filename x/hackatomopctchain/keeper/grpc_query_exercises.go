package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"hackatom-opct-chain/x/hackatomopctchain/types"
)

func (k Keeper) Exercises(goCtx context.Context, req *types.QueryExercisesRequest) (*types.QueryExercisesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var exercises []*types.Exercise
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)

	postStore := prefix.NewStore(store, []byte(types.ExerciseKey))

	pageRes, err := query.Paginate(postStore, req.Pagination, func(key []byte, value []byte) error {
		var exercise types.Exercise
		if err := k.cdc.Unmarshal(value, &exercise); err != nil {
			return err
		}

		exercises = append(exercises, &exercise)

		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryExercisesResponse{Exercise: exercises, Pagination: pageRes}, nil
}
