package keeper

import (
	"encoding/binary"
	"strconv"

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

func (k Keeper) GetChallenge(ctx sdk.Context, challengeId uint64) types.Challenge {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ChallengeKey))
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, challengeId)
	bz := store.Get(byteKey)

	var challenge types.Challenge
	k.cdc.MustUnmarshal(bz, &challenge)
	return challenge
}

func (k Keeper) SetChallengeCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ChallengeCountKey))

	byteKey := []byte(types.ChallengeCountKey)

	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	store.Set(byteKey, bz)
}

func (k Keeper) AttendChallenge(ctx sdk.Context, challengeID uint64, address string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ChallengeAttendanceKey))
	byteKey := []byte(types.ChallengeAttendanceKey + strconv.FormatUint(challengeID, 10) + ":" + address)
	bz := make([]byte, 1)
	binary.BigEndian.PutUint64(bz, 1)
	store.Set(byteKey, []byte("1"))
}

func (k Keeper) CheckAttendee(ctx sdk.Context, challengeID uint64, address string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ChallengeAttendanceKey))
	byteKey := []byte(types.ChallengeAttendanceKey + strconv.FormatUint(challengeID, 10) + ":" + address)
	bz := make([]byte, 1)
	binary.BigEndian.PutUint64(bz, 1)
	return store.Get(byteKey) != nil
}
