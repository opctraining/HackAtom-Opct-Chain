package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"hackatom-opct-chain/x/hackatomopctchain/types"
)

func (k Keeper) StoreExercise(ctx sdk.Context, exercise types.Exercise) bool {
	count := k.GetExerciseCount(ctx)

	exercise.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ExerciseKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, exercise.Id)

	appendedValue := k.cdc.MustMarshal(&exercise)

	store.Set(byteKey, appendedValue)

	k.SetExerciseCount(ctx, count+1)
	return true
}

func (k Keeper) GetExerciseCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ExerciseCountKey))

	byteKey := []byte(types.ExerciseCountKey)

	bz := store.Get(byteKey)

	if bz == nil {
		return 0
	}

	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetExerciseCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ExerciseCountKey))

	byteKey := []byte(types.ExerciseCountKey)

	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	store.Set(byteKey, bz)
}
