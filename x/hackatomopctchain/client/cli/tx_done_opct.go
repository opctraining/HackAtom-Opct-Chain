package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"hackatom-opct-chain/x/hackatomopctchain/types"
)

var _ = strconv.Itoa(0)

func CmdDoneOpct() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "done-opct [category] [score] [starttime] [endtime] [challengeid]",
		Short: "Broadcast message doneOpct",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCategory := args[0]
			argScore := args[1]
			argStarttime := args[2]
			argEndtime := args[3]
			argChallengid := args[4]

			score, err := strconv.ParseInt(argScore, 10, 32)
			score32 := int32(score)
			startTime, err := strconv.ParseInt(argStarttime, 10, 64)
			endTime, err := strconv.ParseInt(argEndtime, 10, 64)
			challengeId, err := strconv.ParseUint(argChallengid, 10, 64)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDoneOpct(
				clientCtx.GetFromAddress().String(),
				argCategory,
				score32,
				startTime,
				endTime,
				challengeId,
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
