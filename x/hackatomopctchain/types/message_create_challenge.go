package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateChallenge = "create_challenge"

var _ sdk.Msg = &MsgCreateChallenge{}

func NewMsgCreateChallenge(creator string, category string, date string, uri string) *MsgCreateChallenge {
	return &MsgCreateChallenge{
		Creator:  creator,
		Category: category,
		Date:     date,
		Uri:      uri,
	}
}

func (msg *MsgCreateChallenge) Route() string {
	return RouterKey
}

func (msg *MsgCreateChallenge) Type() string {
	return TypeMsgCreateChallenge
}

func (msg *MsgCreateChallenge) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateChallenge) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateChallenge) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
