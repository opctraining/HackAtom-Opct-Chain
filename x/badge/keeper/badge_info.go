package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"hackatom-opct-chain/x/badge/types"
)

// SetBadgeInfo set a specific badgeInfo in the store from its index
func (k Keeper) SetBadgeInfo(ctx sdk.Context, badgeInfo types.BadgeInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BadgeInfoKeyPrefix))
	b := k.cdc.MustMarshal(&badgeInfo)
	store.Set(types.BadgeInfoKey(
		badgeInfo.Index,
	), b)
}

// GetBadgeInfo returns a badgeInfo from its index
func (k Keeper) GetBadgeInfo(
	ctx sdk.Context,
	index string,

) (val types.BadgeInfo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BadgeInfoKeyPrefix))

	b := store.Get(types.BadgeInfoKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBadgeInfo removes a badgeInfo from the store
func (k Keeper) RemoveBadgeInfo(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BadgeInfoKeyPrefix))
	store.Delete(types.BadgeInfoKey(
		index,
	))
}

// GetAllBadgeInfo returns all badgeInfo
func (k Keeper) GetAllBadgeInfo(ctx sdk.Context) (list []types.BadgeInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BadgeInfoKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BadgeInfo
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
