package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "hackatom-opct-chain/testutil/keeper"
	"hackatom-opct-chain/x/exercise/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ExerciseKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
