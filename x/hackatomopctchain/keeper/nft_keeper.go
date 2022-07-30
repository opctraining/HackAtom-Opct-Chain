package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
)

func (k Keeper) MintNFT(ctx sdk.Context, nftName string) error {
	// TODO: Bank keeper로 NFT 생성을 대체함
	return k.bk.MintCoins(ctx, minttypes.ModuleName, sdk.NewCoins(sdk.NewCoin(nftName, sdk.OneInt())))
}

func (k Keeper) BurnNFT(ctx sdk.Context, nftName string) error {
	// TODO: Bank keeper로 NFT 생성을 대체함
	return k.bk.BurnCoins(ctx, minttypes.ModuleName, sdk.NewCoins(sdk.NewCoin(nftName, sdk.OneInt())))
}
