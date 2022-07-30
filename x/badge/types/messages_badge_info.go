package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBadgeInfo = "create_badge_info"
	TypeMsgUpdateBadgeInfo = "update_badge_info"
	TypeMsgDeleteBadgeInfo = "delete_badge_info"
)

var _ sdk.Msg = &MsgCreateBadgeInfo{}

func NewMsgCreateBadgeInfo(
	creator string,
	index string,
	badgeId string,
	name string,

) *MsgCreateBadgeInfo {
	return &MsgCreateBadgeInfo{
		Creator: creator,
		Index:   index,
		BadgeId: badgeId,
		Name:    name,
	}
}

func (msg *MsgCreateBadgeInfo) Route() string {
	return RouterKey
}

func (msg *MsgCreateBadgeInfo) Type() string {
	return TypeMsgCreateBadgeInfo
}

func (msg *MsgCreateBadgeInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBadgeInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBadgeInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBadgeInfo{}

func NewMsgUpdateBadgeInfo(
	creator string,
	index string,
	badgeId string,
	name string,

) *MsgUpdateBadgeInfo {
	return &MsgUpdateBadgeInfo{
		Creator: creator,
		Index:   index,
		BadgeId: badgeId,
		Name:    name,
	}
}

func (msg *MsgUpdateBadgeInfo) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBadgeInfo) Type() string {
	return TypeMsgUpdateBadgeInfo
}

func (msg *MsgUpdateBadgeInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBadgeInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBadgeInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBadgeInfo{}

func NewMsgDeleteBadgeInfo(
	creator string,
	index string,

) *MsgDeleteBadgeInfo {
	return &MsgDeleteBadgeInfo{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteBadgeInfo) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBadgeInfo) Type() string {
	return TypeMsgDeleteBadgeInfo
}

func (msg *MsgDeleteBadgeInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBadgeInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBadgeInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
