package hackatomopctchain

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"hackatom-opct-chain/testutil/sample"
	hackatomopctchainsimulation "hackatom-opct-chain/x/hackatomopctchain/simulation"
	"hackatom-opct-chain/x/hackatomopctchain/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = hackatomopctchainsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgDoneOpct = "op_weight_msg_done_opct"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDoneOpct int = 100

	opWeightMsgCreateChallenge = "op_weight_msg_create_challenge"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateChallenge int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	hackatomopctchainGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&hackatomopctchainGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgDoneOpct int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDoneOpct, &weightMsgDoneOpct, nil,
		func(_ *rand.Rand) {
			weightMsgDoneOpct = defaultWeightMsgDoneOpct
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDoneOpct,
		hackatomopctchainsimulation.SimulateMsgDoneOpct(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateChallenge int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateChallenge, &weightMsgCreateChallenge, nil,
		func(_ *rand.Rand) {
			weightMsgCreateChallenge = defaultWeightMsgCreateChallenge
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateChallenge,
		hackatomopctchainsimulation.SimulateMsgCreateChallenge(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
