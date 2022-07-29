package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateExercise = "create_exercise"

var _ sdk.Msg = &MsgCreateExercise{}

func NewMsgCreateExercise(creator string, category string, score uint64, starttime int64, endtime int64) *MsgCreateExercise {
	return &MsgCreateExercise{
		Creator:   creator,
		Category:  category,
		Score:     score,
		Starttime: starttime,
		Endtime:   endtime,
	}
}

func (msg *MsgCreateExercise) Route() string {
	return RouterKey
}

func (msg *MsgCreateExercise) Type() string {
	return TypeMsgCreateExercise
}

func (msg *MsgCreateExercise) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateExercise) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateExercise) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
