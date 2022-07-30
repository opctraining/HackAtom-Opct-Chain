package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"hackatom-opct-chain/x/hackatomopctchain/types"
)

func (k Keeper) SetBadgeMeta(ctx sdk.Context, badgeMeta types.BadgeMeta) uint64 {
	count := k.GetBadgeMetaCount(ctx)
	badgeMeta.Id = count
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BadgeMetaKey))
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, badgeMeta.Id)
	appendedValue := k.cdc.MustMarshal(&badgeMeta)
	store.Set(byteKey, appendedValue)
	k.SetBadgeMetaCount(ctx, count+1)

	return count
}

func (k Keeper) GetBadgeMeta(ctx sdk.Context, badgeId uint64) types.BadgeMeta {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BadgeMetaKey))
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, badgeId)
	bz := store.Get(byteKey)

	var badge types.BadgeMeta
	k.cdc.MustUnmarshal(bz, &badge)
	return badge
}

func (k Keeper) RegisterBadgeNFTInfo(ctx sdk.Context, badgeNFT types.BadgeNFT) uint64 {
	count := k.GetChallengeCount(ctx)
	badgeNFT.Id = count
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BadgeNFTKey))
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, badgeNFT.Id)
	appendedValue := k.cdc.MustMarshal(&badgeNFT)
	store.Set(byteKey, appendedValue)
	k.SetBadgeNFTCount(ctx, count+1)

	return count
}

func (k Keeper) GetBadgeNFTInfo(ctx sdk.Context, badgeNFTId uint64) types.BadgeNFT {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BadgeNFTKey))
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, badgeNFTId)
	bz := store.Get(byteKey)

	var badge types.BadgeNFT
	k.cdc.MustUnmarshal(bz, &badge)
	return badge
}

func (k Keeper) GetBadgeMetaCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BadgeMetaCountKey))
	byteKey := []byte(types.BadgeMetaCountKey)
	bz := store.Get(byteKey)
	if bz == nil {
		return 0
	}
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetBadgeMetaCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BadgeMetaCountKey))
	byteKey := []byte(types.BadgeMetaCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

func (k Keeper) GetBadgeNFTCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BadgeNFTKey))
	byteKey := []byte(types.BadgeNFTKey)
	bz := store.Get(byteKey)
	if bz == nil {
		return 0
	}
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetBadgeNFTCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.BadgeNFTKey))
	byteKey := []byte(types.BadgeNFTKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	store.Set(byteKey, bz)
}
