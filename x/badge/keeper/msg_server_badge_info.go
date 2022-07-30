package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"hackatom-opct-chain/x/badge/types"
)

func (k msgServer) CreateBadgeInfo(goCtx context.Context, msg *types.MsgCreateBadgeInfo) (*types.MsgCreateBadgeInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetBadgeInfo(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var badgeInfo = types.BadgeInfo{
		Creator: msg.Creator,
		Index:   msg.Index,
		BadgeId: msg.BadgeId,
		Name:    msg.Name,
	}

	k.SetBadgeInfo(
		ctx,
		badgeInfo,
	)
	return &types.MsgCreateBadgeInfoResponse{}, nil
}

func (k msgServer) UpdateBadgeInfo(goCtx context.Context, msg *types.MsgUpdateBadgeInfo) (*types.MsgUpdateBadgeInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBadgeInfo(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var badgeInfo = types.BadgeInfo{
		Creator: msg.Creator,
		Index:   msg.Index,
		BadgeId: msg.BadgeId,
		Name:    msg.Name,
	}

	k.SetBadgeInfo(ctx, badgeInfo)

	return &types.MsgUpdateBadgeInfoResponse{}, nil
}

func (k msgServer) DeleteBadgeInfo(goCtx context.Context, msg *types.MsgDeleteBadgeInfo) (*types.MsgDeleteBadgeInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetBadgeInfo(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBadgeInfo(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteBadgeInfoResponse{}, nil
}
