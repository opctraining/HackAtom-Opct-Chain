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
		Use:   "done-opct [category] [score] [starttime] [endtime]",
		Short: "Broadcast message doneOpct",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCategory := args[0]
			argScore := args[1]
			argStarttime := args[2]
			argEndtime := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDoneOpct(
				clientCtx.GetFromAddress().String(),
				argCategory,
				argScore,
				argStarttime,
				argEndtime,
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
