package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "hackatom-opct-chain/testutil/keeper"
	"hackatom-opct-chain/testutil/nullify"
	"hackatom-opct-chain/x/badge/keeper"
	"hackatom-opct-chain/x/badge/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNBadgeInfo(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.BadgeInfo {
	items := make([]types.BadgeInfo, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetBadgeInfo(ctx, items[i])
	}
	return items
}

func TestBadgeInfoGet(t *testing.T) {
	keeper, ctx := keepertest.BadgeKeeper(t)
	items := createNBadgeInfo(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBadgeInfo(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBadgeInfoRemove(t *testing.T) {
	keeper, ctx := keepertest.BadgeKeeper(t)
	items := createNBadgeInfo(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBadgeInfo(ctx,
			item.Index,
		)
		_, found := keeper.GetBadgeInfo(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestBadgeInfoGetAll(t *testing.T) {
	keeper, ctx := keepertest.BadgeKeeper(t)
	items := createNBadgeInfo(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBadgeInfo(ctx)),
	)
}
