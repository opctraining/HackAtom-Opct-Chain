package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateChallengeInfo = "create_challenge_info"
	TypeMsgUpdateChallengeInfo = "update_challenge_info"
	TypeMsgDeleteChallengeInfo = "delete_challenge_info"
)

var _ sdk.Msg = &MsgCreateChallengeInfo{}

func NewMsgCreateChallengeInfo(
	creator string,
	index string,
	name string,
	category string,
	score string,
	rewardId string,

) *MsgCreateChallengeInfo {
	return &MsgCreateChallengeInfo{
		Creator:  creator,
		Index:    index,
		Name:     name,
		Category: category,
		Score:    score,
		RewardId: rewardId,
	}
}

func (msg *MsgCreateChallengeInfo) Route() string {
	return RouterKey
}

func (msg *MsgCreateChallengeInfo) Type() string {
	return TypeMsgCreateChallengeInfo
}

func (msg *MsgCreateChallengeInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateChallengeInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateChallengeInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateChallengeInfo{}

func NewMsgUpdateChallengeInfo(
	creator string,
	index string,
	name string,
	category string,
	score string,
	rewardId string,

) *MsgUpdateChallengeInfo {
	return &MsgUpdateChallengeInfo{
		Creator:  creator,
		Index:    index,
		Name:     name,
		Category: category,
		Score:    score,
		RewardId: rewardId,
	}
}

func (msg *MsgUpdateChallengeInfo) Route() string {
	return RouterKey
}

func (msg *MsgUpdateChallengeInfo) Type() string {
	return TypeMsgUpdateChallengeInfo
}

func (msg *MsgUpdateChallengeInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateChallengeInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateChallengeInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteChallengeInfo{}

func NewMsgDeleteChallengeInfo(
	creator string,
	index string,

) *MsgDeleteChallengeInfo {
	return &MsgDeleteChallengeInfo{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteChallengeInfo) Route() string {
	return RouterKey
}

func (msg *MsgDeleteChallengeInfo) Type() string {
	return TypeMsgDeleteChallengeInfo
}

func (msg *MsgDeleteChallengeInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteChallengeInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteChallengeInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
