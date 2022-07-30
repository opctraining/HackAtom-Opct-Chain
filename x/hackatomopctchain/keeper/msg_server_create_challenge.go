package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"hackatom-opct-chain/x/hackatomopctchain/types"
)

func (k msgServer) CreateChallenge(goCtx context.Context, msg *types.MsgCreateChallenge) (*types.MsgCreateChallengeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var challenge = types.Challenge{
		Creator:  msg.Creator,
		Category: msg.Category,
		Date:     msg.Date,
		Uri:      msg.Uri,
	}
	id := k.StoreChallenge(ctx, challenge)

	return &types.MsgCreateChallengeResponse{Id: id}, nil
}
