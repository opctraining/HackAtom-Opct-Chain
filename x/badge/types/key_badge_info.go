package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BadgeInfoKeyPrefix is the prefix to retrieve all BadgeInfo
	BadgeInfoKeyPrefix = "BadgeInfo/value/"
)

// BadgeInfoKey returns the store key to retrieve a BadgeInfo from the index fields
func BadgeInfoKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
