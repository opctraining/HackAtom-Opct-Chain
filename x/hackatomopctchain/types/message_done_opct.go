package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDoneOpct = "done_opct"

var _ sdk.Msg = &MsgDoneOpct{}

func NewMsgDoneOpct(creator string, category string, score int32, starttime int64, endtime int64) *MsgDoneOpct {
	return &MsgDoneOpct{
		Creator:   creator,
		Category:  category,
		Score:     score,
		Starttime: starttime,
		Endtime:   endtime,
	}
}

func (msg *MsgDoneOpct) Route() string {
	return RouterKey
}

func (msg *MsgDoneOpct) Type() string {
	return TypeMsgDoneOpct
}

func (msg *MsgDoneOpct) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDoneOpct) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDoneOpct) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
