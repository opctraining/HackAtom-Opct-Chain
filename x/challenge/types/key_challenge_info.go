package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ChallengeInfoKeyPrefix is the prefix to retrieve all ChallengeInfo
	ChallengeInfoKeyPrefix = "ChallengeInfo/value/"
)

// ChallengeInfoKey returns the store key to retrieve a ChallengeInfo from the index fields
func ChallengeInfoKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
