package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"hackatom-opct-chain/x/challenge/types"
)

func (k msgServer) CreateChallengeInfo(goCtx context.Context, msg *types.MsgCreateChallengeInfo) (*types.MsgCreateChallengeInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetChallengeInfo(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var challengeInfo = types.ChallengeInfo{
		Creator:  msg.Creator,
		Index:    msg.Index,
		Name:     msg.Name,
		Category: msg.Category,
		Score:    msg.Score,
		RewardId: msg.RewardId,
	}

	k.SetChallengeInfo(
		ctx,
		challengeInfo,
	)
	return &types.MsgCreateChallengeInfoResponse{}, nil
}

func (k msgServer) UpdateChallengeInfo(goCtx context.Context, msg *types.MsgUpdateChallengeInfo) (*types.MsgUpdateChallengeInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetChallengeInfo(
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

	var challengeInfo = types.ChallengeInfo{
		Creator:  msg.Creator,
		Index:    msg.Index,
		Name:     msg.Name,
		Category: msg.Category,
		Score:    msg.Score,
		RewardId: msg.RewardId,
	}

	k.SetChallengeInfo(ctx, challengeInfo)

	return &types.MsgUpdateChallengeInfoResponse{}, nil
}

func (k msgServer) DeleteChallengeInfo(goCtx context.Context, msg *types.MsgDeleteChallengeInfo) (*types.MsgDeleteChallengeInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetChallengeInfo(
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

	k.RemoveChallengeInfo(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteChallengeInfoResponse{}, nil
}
