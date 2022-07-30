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

func (k Keeper) Challenges(goCtx context.Context, req *types.QueryChallengesRequest) (*types.QueryChallengesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var challenges []*types.Challenge
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)

	postStore := prefix.NewStore(store, []byte(types.ChallengeKey))

	pageRes, err := query.Paginate(postStore, req.Pagination, func(key []byte, value []byte) error {
		var challenge types.Challenge
		if err := k.cdc.Unmarshal(value, &challenge); err != nil {
			return err
		}

		if req.Date == challenge.Date {
			challenges = append(challenges, &challenge)
		}

		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryChallengesResponse{Challenge: challenges, Pagination: pageRes}, nil
}
