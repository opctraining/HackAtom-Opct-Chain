package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"hackatom-opct-chain/testutil/sample"
)

func TestMsgCreateChallengeInfo_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateChallengeInfo
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateChallengeInfo{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateChallengeInfo{
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

func TestMsgUpdateChallengeInfo_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateChallengeInfo
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateChallengeInfo{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateChallengeInfo{
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

func TestMsgDeleteChallengeInfo_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteChallengeInfo
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteChallengeInfo{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteChallengeInfo{
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
