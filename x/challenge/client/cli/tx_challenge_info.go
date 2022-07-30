package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"hackatom-opct-chain/x/challenge/types"
)

func CmdCreateChallengeInfo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-challenge-info [index] [name] [category] [score] [reward-id]",
		Short: "Create a new challengeInfo",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argName := args[1]
			argCategory := args[2]
			argScore := args[3]
			argRewardId := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateChallengeInfo(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argName,
				argCategory,
				argScore,
				argRewardId,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateChallengeInfo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-challenge-info [index] [name] [category] [score] [reward-id]",
		Short: "Update a challengeInfo",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argName := args[1]
			argCategory := args[2]
			argScore := args[3]
			argRewardId := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateChallengeInfo(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argName,
				argCategory,
				argScore,
				argRewardId,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteChallengeInfo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-challenge-info [index]",
		Short: "Delete a challengeInfo",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteChallengeInfo(
				clientCtx.GetFromAddress().String(),
				indexIndex,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
