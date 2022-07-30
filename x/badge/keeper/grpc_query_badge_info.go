package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"hackatom-opct-chain/x/badge/types"
)

func (k Keeper) BadgeInfoAll(c context.Context, req *types.QueryAllBadgeInfoRequest) (*types.QueryAllBadgeInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var badgeInfos []types.BadgeInfo
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	badgeInfoStore := prefix.NewStore(store, types.KeyPrefix(types.BadgeInfoKeyPrefix))

	pageRes, err := query.Paginate(badgeInfoStore, req.Pagination, func(key []byte, value []byte) error {
		var badgeInfo types.BadgeInfo
		if err := k.cdc.Unmarshal(value, &badgeInfo); err != nil {
			return err
		}

		badgeInfos = append(badgeInfos, badgeInfo)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBadgeInfoResponse{BadgeInfo: badgeInfos, Pagination: pageRes}, nil
}

func (k Keeper) BadgeInfo(c context.Context, req *types.QueryGetBadgeInfoRequest) (*types.QueryGetBadgeInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBadgeInfo(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBadgeInfoResponse{BadgeInfo: val}, nil
}
