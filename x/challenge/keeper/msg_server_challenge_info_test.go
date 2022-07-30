package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "hackatom-opct-chain/testutil/keeper"
	"hackatom-opct-chain/x/challenge/keeper"
	"hackatom-opct-chain/x/challenge/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestChallengeInfoMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.ChallengeKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateChallengeInfo{Creator: creator,
			Index: strconv.Itoa(i),
		}
		_, err := srv.CreateChallengeInfo(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetChallengeInfo(ctx,
			expected.Index,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestChallengeInfoMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateChallengeInfo
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateChallengeInfo{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateChallengeInfo{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateChallengeInfo{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.ChallengeKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateChallengeInfo{Creator: creator,
				Index: strconv.Itoa(0),
			}
			_, err := srv.CreateChallengeInfo(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateChallengeInfo(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetChallengeInfo(ctx,
					expected.Index,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestChallengeInfoMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteChallengeInfo
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteChallengeInfo{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteChallengeInfo{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteChallengeInfo{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.ChallengeKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateChallengeInfo(wctx, &types.MsgCreateChallengeInfo{Creator: creator,
				Index: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteChallengeInfo(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetChallengeInfo(ctx,
					tc.request.Index,
				)
				require.False(t, found)
			}
		})
	}
}
