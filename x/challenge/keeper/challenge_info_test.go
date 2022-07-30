package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "hackatom-opct-chain/testutil/keeper"
	"hackatom-opct-chain/testutil/nullify"
	"hackatom-opct-chain/x/challenge/keeper"
	"hackatom-opct-chain/x/challenge/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNChallengeInfo(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ChallengeInfo {
	items := make([]types.ChallengeInfo, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetChallengeInfo(ctx, items[i])
	}
	return items
}

func TestChallengeInfoGet(t *testing.T) {
	keeper, ctx := keepertest.ChallengeKeeper(t)
	items := createNChallengeInfo(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetChallengeInfo(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestChallengeInfoRemove(t *testing.T) {
	keeper, ctx := keepertest.ChallengeKeeper(t)
	items := createNChallengeInfo(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveChallengeInfo(ctx,
			item.Index,
		)
		_, found := keeper.GetChallengeInfo(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestChallengeInfoGetAll(t *testing.T) {
	keeper, ctx := keepertest.ChallengeKeeper(t)
	items := createNChallengeInfo(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllChallengeInfo(ctx)),
	)
}
