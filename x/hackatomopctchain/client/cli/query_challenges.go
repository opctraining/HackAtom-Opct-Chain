package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"hackatom-opct-chain/x/hackatomopctchain/types"
)

var _ = strconv.Itoa(0)

func CmdChallenges() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "challenges [date]",
		Short: "Query challenges",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqDate := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryChallengesRequest{

				Date: reqDate,
			}

			res, err := queryClient.Challenges(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
