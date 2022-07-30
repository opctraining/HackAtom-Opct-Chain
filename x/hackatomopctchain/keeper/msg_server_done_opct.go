package keeper

import (
	"context"
	"errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"hackatom-opct-chain/x/hackatomopctchain/types"
	"strconv"
)

func (k msgServer) DoneOpct(goCtx context.Context, msg *types.MsgDoneOpct) (*types.MsgDoneOpctResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// 1. store exercise information
	var exercise = types.Exercise{
		Creator:     msg.Creator,
		Category:    msg.Category,
		Score:       msg.Score,
		StartTime:   msg.Starttime,
		EndTime:     msg.Endtime,
		Challengeid: msg.Challengeid,
	}
	_ = k.StoreExercise(ctx, exercise)

	// 2. Check Challenge
	if !k.CheckAttendee(ctx, msg.Challengeid, msg.Creator) {
		return nil, errors.New("already attend user")
	}

	// 3. Get & Update Challenge Info
	k.AttendChallenge(ctx, msg.Challengeid, msg.Creator)
	challenge := k.GetChallenge(ctx, msg.Challengeid)

	// 4. Get Reward Meta data
	badgeMeta := k.GetBadgeMeta(ctx, challenge.RewardId)

	// 5. Minting Reward Minting
	if err := k.MintNFT(ctx, nftName(badgeMeta)); err != nil {
		return nil, sdkerrors.Wrap(err, "Badge Minting failed")
	}
	badgeNFT := types.BadgeNFT{
		BadgeId: badgeMeta.Id,
		Owner:   msg.Creator,
	}
	k.RegisterBadgeNFTInfo(ctx, badgeNFT)
	return &types.MsgDoneOpctResponse{}, nil
}

func nftName(badgeMeta types.BadgeMeta) string {
	return "nft:" + strconv.FormatUint(badgeMeta.Id, 16) + ":" + badgeMeta.Name
}
