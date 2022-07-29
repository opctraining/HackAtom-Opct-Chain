package exercise_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "hackatom-opct-chain/testutil/keeper"
	"hackatom-opct-chain/testutil/nullify"
	"hackatom-opct-chain/x/exercise"
	"hackatom-opct-chain/x/exercise/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ExerciseKeeper(t)
	exercise.InitGenesis(ctx, *k, genesisState)
	got := exercise.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
