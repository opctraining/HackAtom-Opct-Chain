package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"hackatom-opct-chain/x/hackatomopctchain/types"
)

func (k Keeper) StoreChallenge(ctx sdk.Context, challenge types.Challenge) uint64 {
	count := k.GetChallengeCount(ctx)

	challenge.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ChallengeKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, challenge.Id)

	appendedValue := k.cdc.MustMarshal(&challenge)

	store.Set(byteKey, appendedValue)

	k.SetChallengeCount(ctx, count+1)

	return count
}

func (k Keeper) GetChallengeCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ChallengeCountKey))

	byteKey := []byte(types.ChallengeCountKey)

	bz := store.Get(byteKey)

	if bz == nil {
		return 0
	}

	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetChallengeCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ChallengeCountKey))

	byteKey := []byte(types.ChallengeCountKey)

	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	store.Set(byteKey, bz)
}
