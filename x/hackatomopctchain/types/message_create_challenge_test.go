package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"hackatom-opct-chain/testutil/sample"
)

func TestMsgCreateChallenge_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateChallenge
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateChallenge{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateChallenge{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
