package badge_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "hackatom-opct-chain/testutil/keeper"
	"hackatom-opct-chain/testutil/nullify"
	"hackatom-opct-chain/x/badge"
	"hackatom-opct-chain/x/badge/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		BadgeInfoList: []types.BadgeInfo{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BadgeKeeper(t)
	badge.InitGenesis(ctx, *k, genesisState)
	got := badge.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.BadgeInfoList, got.BadgeInfoList)
	// this line is used by starport scaffolding # genesis/test/assert
}
