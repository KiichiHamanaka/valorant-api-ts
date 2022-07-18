/**
 * @property puuid riotUUID
 * @property gameName riotID
 * @property tagLine RiotTagLine.
 */
export type AccountDto = {
  puuid: string,
  gameName: string,
  tagLine: string
}


/**
 * @property matchInfo riotUUID
 * @property players riotID
 * @property coaches RiotTagLine.
 * @property teams RiotTagLine.
 * @property roundResults RiotTagLine.
 */
export type MatchDto = {
  matchInfo: MatchInfoDto,
  players: PlayerDto[],
  coaches: CoachDto[],
  teams: TeamDto[],
  roundResults: RoundResultDto[]
}


/**
 * @property matchId riotUUID
 * @property mapId riotID
 * @property gameLengthMillis RiotTagLine.
 * @property gameStartMillis long型
 * @property isCompleted RiotTagLine.
 * @property customGameName RiotTagLine.
 * @property queueId RiotTagLine.
 * @property gameMode RiotTagLine.
 * @property isRanked RiotTagLine.
 * @property seasonId RiotTagLine.
 */
export type MatchInfoDto = {
  matchId: string
  mapId: string
  gameLengthMillis: number
  gameStartMillis: number
  provisioningFlowId: string
  isCompleted: boolean
  customGameName: string
  queueId: string
  gameMode: string
  isRanked: boolean
  seasonId: string
}

/**
 * @property  puuid
 * @property  gameName
 * @property  tagLine
 * @property  teamId
 * @property  partyId
 * @property  characterId
 * @property  stats
 * @property  competitiveTier
 * @property  playerCard
 * @property  playerTitle
 */
export type PlayerDto = {
  puuid: string
  gameName: string
  tagLine: string
  teamId?: string
  partyId?: string
  characterId?: string
  stats?: PlayerStatsDto
  competitiveTier?: number
  playerCard?: string
  playerTitle?: string
  leaderboardRank?: number
  rankedRating?: number
  numberOfWins?: number
}

/**
 * @property  score  number
 * @property  roundsPlayed  number
 * @property  kills  number
 * @property  deaths  number
 * @property  assists  number
 * @property  playtimeMillis  number
 * @property  abilityCasts  AbilityCastsDto
 */
export type PlayerStatsDto = {
  score: number
  roundsPlayed: number
  kills: number
  deaths: number
  assists: number
  playtimeMillis: number
  abilityCasts: AbilityCastsDto
}

/**
 * @property    grenadeCasts
 * @property    ability1Casts
 * @property    ability2Casts
 * @property    ultimateCasts
 */
export type AbilityCastsDto = {
  grenadeCasts: number
  ability1Casts: number
  ability2Casts: number
  ultimateCasts: number
}

/**
 * @property puuid  string
 * @property teamId  string
 */
export type CoachDto = {
  puuid: string
  teamId: string
}

/**
 * @property teamId  string  This is an arbitrary string. Red and Blue in bomb modes. The puuid of the player in deathmatch.
 * @property won  boolean
 * @property roundsPlayed  number
 * @property roundsWon  number
 * @property numPoints  number  Team points scored. Number of kills in deathmatch.
 */
export type TeamDto = {
  teamId: string
  won: boolean
  roundsPlayed: number
  roundsWon: number
  numPoints: number
}

/**
 * @property roundNum  number
 * @property roundResult  string
 * @property roundCeremony  string
 * @property winningTeam  string
 * @property bombPlanter  string  PUUID of player
 * @property bombDefuser  string  PUUID of player
 * @property plantRoundTime  number
 * @property plantPlayerLocations  List[PlayerLocationsDto]
 * @property plantLocation  LocationDto
 * @property plantSite  string
 * @property defuseRoundTime  number
 * @property defusePlayerLocations  List[PlayerLocationsDto]
 * @property defuseLocation  LocationDto
 * @property playerStats  List[PlayerRoundStatsDto]
 * @property roundResultCode  string
 */
type RoundResultDto = {
  roundNum: number
  roundResult: string
  roundCeremony: string
  winningTeam: string
  bombPlanter: string
  bombDefuser: string
  plantRoundTime: number
  plantPlayerLocations: PlayerLocationsDto[]
  plantLocation: LocationDto
  plantSite: string
  defuseRoundTime: number
  defusePlayerLocations: PlayerLocationsDto[]
  defuseLocation: LocationDto
  playerStats: PlayerRoundStatsDto[]
  roundResultCode: string
}

/**
 * @property puuid  string
 * @property viewRadians  float
 * @property location  LocationDto
 */
type PlayerLocationsDto = {
  puuid: string
  viewRadians: number
  location: LocationDto
}
/**
 * @property x  string
 * @property y  LocationDto
 */
type LocationDto = {
  x: number
  y: number
}

/**
 * @property puuid
 * @property kills
 * @property damage
 * @property score
 * @property economy
 */
export type PlayerRoundStatsDto = {
  puuid: string
  kills: KillDto[]
  damage: DamageDto[]
  score: number
  economy: EconomyDto
  ability: AbilityDto
}
/**
 * @property timeSinceGameStartMillis  number
 * @property timeSinceRoundStartMillis  number
 * @property killer  string  PUUID
 * @property victim  string  PUUID
 * @property victimLocation  LocationDto
 * @property assistants  List[string]  List of PUUIDs
 * @property playerLocations  List[PlayerLocationsDto]
 * @property finishingDamage  FinishingDamageDto
 */
export type KillDto = {
  timeSinceGameStartMillis: number
  timeSinceRoundStartMillis: number
  killer: string
  victim: string
  victimLocation: LocationDto
  assistants: string[]
  playerLocations: PlayerLocationsDto[]
  finishingDamage: FinishingDamageDto
}

/**
 * @property damageType  string
 * @property damageItem  string
 * @property isSecondaryFireMode  boolean
 */
export type FinishingDamageDto = {
  damageType: string
  damageItem: string
  isSecondaryFireMode: boolean
}

/**
 *   @property receiver
 *   @property damage
 *   @property legshots
 *   @property bodyshots
 *   @property headshots
 */
export type DamageDto = {
  receiver: string
  damage: number
  legshots: number
  bodyshots: number
  headshots: number
}

/**
 * @property loadoutValue
 * @property weapon
 * @property armor
 * @property remaining
 * @property spent
 */
export type EconomyDto = {
  loadoutValue: number
  weapon: string
  armor: string
  remaining: number
  spent: number
}

/**
 * @property grenadeEffects
 * @property ability1Effects
 * @property ability2Effects
 * @property ultimateEffects
 */
export type AbilityDto = {
  grenadeEffects: string
  ability1Effects: string
  ability2Effects: string
  ultimateEffects: string
}

/**
 * @property puuid
 * @property history
 */
export type MatchlistDto = {
  puuid: string
  history: MatchlistEntryDto[]
}

/**
 * @property matchId
 * @property gameStartTimeMillis
 * @property teamId
 */
export type MatchlistEntryDto = {
  matchId: string
  gameStartTimeMillis: number
  teamId: string
}

/**
 * @property currentTime
 * @property matchIds
 */
export type RecentMatchesDto = {
  currentTime: number
  matchIds: string[]
}

/**
 * @property shard
 * @property actId
 * @property totalPlayers
 * @property players
 */
export type LeaderboardDto = {
  shard: string
  actId: string
  totalPlayers: number
  players: PlayerDto[]
}

/**
 * @property id
 * @property name
 * @property locales
 * @property maintenances
 * @property incidents
 */
export type PlatformDataDto = {
  id: string
  name: string
  locales: string[]
  maintenances: StatusDto[]
  incidents: StatusDto[]
}

/**
 * @property id  int
 * @property maintenance_status  string  (Legal values: scheduled, in_progress, complete)
 * @property incident_severity  string  (Legal values: info, warning, critical)
 * @property titles  List[ContentDto]
 * @property updates  List[UpdateDto]
 * @property created_at  string
 * @property archive_at  string
 * @property updated_at  string
 * @property platforms  List[string]  (Legal values: windows, macos, android, ios, ps4, xbone, switch)
 */
export type StatusDto = {
  id: number
  maintenance_status: string
  incident_severity: string
  titles: ContentDto[]
  updates: UpdateDto[]
  created_at: string
  archive_at: string
  updated_at: string
  platforms: string[]
}

/**
 * @property locale
 * @property content
 */
export type ContentDto = {
  version: string
  characters: ContentItemDto[]
  maps: ContentItemDto[]
  chromas: ContentItemDto[]
  skins: ContentItemDto[]
  skinLevels: ContentItemDto[]
  equips: ContentItemDto[]
  gameModes: ContentItemDto[]
  sprays: ContentItemDto[]
  sprayLevels: ContentItemDto[]
  charms: ContentItemDto[]
  charmLevels: ContentItemDto[]
  playerCards: ContentItemDto[]
  playerTitles: ContentItemDto[]
  acts: ActDto[]
  locale: string
  content: string
}

/**
 * @property name
 * @property localizedNames
 * @property id
 * @property assetName
 * @property assetPath
 */
export type ContentItemDto = {
  name: string
  localizedNames: LocalizedNamesDto
  id: string
  assetName: string
  assetPath: string
}

/**
 * @property name
 * @property localizedNames
 * @property id
 * @property assetName
 */
export type ActDto = {
  name: string
  localizedNames: LocalizedNamesDto
  id: string
  isActive: boolean
}

export type LocalizedNamesDto = {
  'ar-AE': string
  'de-DE': string
  'en-GB': string
  'en-US': string
  'es-ES': string
  'es-MX': string
  'fr-FR': string
  'id-ID': string
  'it-IT': string
  'ja-JP': string
  'ko-KR': string
  'pl-PL': string
  'pt-BR': string
  'ru-RU': string
  'th-TH': string
  'tr-TR': string
  'vi-VN': string
  'zh-CN': string
  'zh-TW': string
}

/**
 * @property id  int
 * @property author  string
 * @property publish  boolean
 * @property publish_locations  List[string]  (Legal values: riotclient, riotstatus, game)
 * @property translations  List[ContentDto]
 * @property created_at  string
 * @property updated_at  string
 */
export type UpdateDto = {
  id: number
  author: string
  publish: boolean
  publish_locations: string[]
  translations: ContentDto[]
  created_at: string
  updated_at: string
}