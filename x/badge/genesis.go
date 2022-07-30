package badge

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"hackatom-opct-chain/x/badge/keeper"
	"hackatom-opct-chain/x/badge/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the badgeInfo
	for _, elem := range genState.BadgeInfoList {
		k.SetBadgeInfo(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.BadgeInfoList = k.GetAllBadgeInfo(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
