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

func CmdCreateChallenge() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-challenge [category] [date] [uri]",
		Short: "Broadcast message createChallenge",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCategory := args[0]
			argDate := args[1]
			argUri := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateChallenge(
				clientCtx.GetFromAddress().String(),
				argCategory,
				argDate,
				argUri,
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
