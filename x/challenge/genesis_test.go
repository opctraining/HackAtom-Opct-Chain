package challenge_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "hackatom-opct-chain/testutil/keeper"
	"hackatom-opct-chain/testutil/nullify"
	"hackatom-opct-chain/x/challenge"
	"hackatom-opct-chain/x/challenge/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ChallengeKeeper(t)
	challenge.InitGenesis(ctx, *k, genesisState)
	got := challenge.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}