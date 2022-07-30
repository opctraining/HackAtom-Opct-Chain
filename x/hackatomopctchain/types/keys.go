package types

const (
	// ModuleName defines the module name
	ModuleName = "hackatomopctchain"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_hackatomopctchain"

	ExerciseKey      = "exercise:"
	ExerciseCountKey = "exercise-count:"

	ChallengeKey           = "challenge:"
	ChallengeCountKey      = "challenge-count:"
	ChallengeAttendanceKey = "challenge-attendance:"

	BadgeMetaKey      = "badge-meta:"
	BadgeNFTKey       = "badge-nft:"
	BadgeMetaCountKey = "badge-meta-count:"
	BadgeNFTCountKey  = "badge-nft-count:"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
