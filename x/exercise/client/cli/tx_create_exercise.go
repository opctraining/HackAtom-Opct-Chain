package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"hackatom-opct-chain/x/exercise/types"
)

var _ = strconv.Itoa(0)

func CmdCreateExercise() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-exercise [category] [score] [starttime] [endtime]",
		Short: "Broadcast message createExercise",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCategory := args[0]
			argScore := args[1]
			argStarttime := args[2]
			argEndtime := args[3]
			score, err := strconv.ParseUint(argScore, 10, 64)
			startTime, err := strconv.ParseInt(argStarttime, 10, 64)
			endTime, err := strconv.ParseInt(argEndtime, 10, 64)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateExercise(
				clientCtx.GetFromAddress().String(),
				argCategory,
				score,
				startTime,
				endTime,
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
