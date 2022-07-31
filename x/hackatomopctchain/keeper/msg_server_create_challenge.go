package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"hackatom-opct-chain/x/hackatomopctchain/types"
)

func (k msgServer) CreateChallenge(goCtx context.Context, msg *types.MsgCreateChallenge) (*types.MsgCreateChallengeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	badgeMeta := types.BadgeMeta{
		Name:     msg.BadgeName,
		Category: msg.Category,
		Uri:      msg.BadgeURI,
	}
	badgeID := k.SetBadgeMeta(ctx, badgeMeta)
	var challenge = types.Challenge{
		Creator:  msg.Creator,
		Category: msg.Category,
		Date:     msg.Date,
		Uri:      msg.Uri,
		RewardId: badgeID,
	}
	id := k.StoreChallenge(ctx, challenge)
	return &types.MsgCreateChallengeResponse{Id: id}, nil
}
