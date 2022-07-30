package challenge

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"hackatom-opct-chain/testutil/sample"
	challengesimulation "hackatom-opct-chain/x/challenge/simulation"
	"hackatom-opct-chain/x/challenge/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = challengesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateChallengeInfo = "op_weight_msg_challenge_info"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateChallengeInfo int = 100

	opWeightMsgUpdateChallengeInfo = "op_weight_msg_challenge_info"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateChallengeInfo int = 100

	opWeightMsgDeleteChallengeInfo = "op_weight_msg_challenge_info"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteChallengeInfo int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	challengeGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		ChallengeInfoList: []types.ChallengeInfo{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&challengeGenesis)
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

	var weightMsgCreateChallengeInfo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateChallengeInfo, &weightMsgCreateChallengeInfo, nil,
		func(_ *rand.Rand) {
			weightMsgCreateChallengeInfo = defaultWeightMsgCreateChallengeInfo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateChallengeInfo,
		challengesimulation.SimulateMsgCreateChallengeInfo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateChallengeInfo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateChallengeInfo, &weightMsgUpdateChallengeInfo, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateChallengeInfo = defaultWeightMsgUpdateChallengeInfo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateChallengeInfo,
		challengesimulation.SimulateMsgUpdateChallengeInfo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteChallengeInfo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteChallengeInfo, &weightMsgDeleteChallengeInfo, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteChallengeInfo = defaultWeightMsgDeleteChallengeInfo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteChallengeInfo,
		challengesimulation.SimulateMsgDeleteChallengeInfo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
