package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"hackatom-opct-chain/x/challenge/types"
)

// SetChallengeInfo set a specific challengeInfo in the store from its index
func (k Keeper) SetChallengeInfo(ctx sdk.Context, challengeInfo types.ChallengeInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChallengeInfoKeyPrefix))
	b := k.cdc.MustMarshal(&challengeInfo)
	store.Set(types.ChallengeInfoKey(
		challengeInfo.Index,
	), b)
}

// GetChallengeInfo returns a challengeInfo from its index
func (k Keeper) GetChallengeInfo(
	ctx sdk.Context,
	index string,

) (val types.ChallengeInfo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChallengeInfoKeyPrefix))

	b := store.Get(types.ChallengeInfoKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveChallengeInfo removes a challengeInfo from the store
func (k Keeper) RemoveChallengeInfo(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChallengeInfoKeyPrefix))
	store.Delete(types.ChallengeInfoKey(
		index,
	))
}

// GetAllChallengeInfo returns all challengeInfo
func (k Keeper) GetAllChallengeInfo(ctx sdk.Context) (list []types.ChallengeInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChallengeInfoKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ChallengeInfo
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
