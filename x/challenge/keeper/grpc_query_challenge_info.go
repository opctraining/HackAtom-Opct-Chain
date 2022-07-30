package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"hackatom-opct-chain/x/challenge/types"
)

func (k Keeper) ChallengeInfoAll(c context.Context, req *types.QueryAllChallengeInfoRequest) (*types.QueryAllChallengeInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var challengeInfos []types.ChallengeInfo
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	challengeInfoStore := prefix.NewStore(store, types.KeyPrefix(types.ChallengeInfoKeyPrefix))

	pageRes, err := query.Paginate(challengeInfoStore, req.Pagination, func(key []byte, value []byte) error {
		var challengeInfo types.ChallengeInfo
		if err := k.cdc.Unmarshal(value, &challengeInfo); err != nil {
			return err
		}

		challengeInfos = append(challengeInfos, challengeInfo)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllChallengeInfoResponse{ChallengeInfo: challengeInfos, Pagination: pageRes}, nil
}

func (k Keeper) ChallengeInfo(c context.Context, req *types.QueryGetChallengeInfoRequest) (*types.QueryGetChallengeInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetChallengeInfo(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetChallengeInfoResponse{ChallengeInfo: val}, nil
}
