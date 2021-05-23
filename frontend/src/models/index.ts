export interface CreateRoomRequest {
  name: string
}

interface LobbyPart {
  _id: string
  name: string
}

interface LobbySuite {
  _id: string
  name: string
  parts: LobbyPart[]
}

export interface RoomLobbyResponse {
  _id: string
  name: string
  suites: LobbySuite[]
  isOwner: undefined | true
}

export interface RoomListResponse {
  _id: string
  name: string
}

export interface LoginResponse {
  email: string
  name: string
  picture: string
  id: string
  ownedRoom: RoomListResponse | null
}

export interface OptionType {
  _id: string
  name: string
}

export interface RoomLobbyFormValue {
  parts: OptionType[]
}

export interface RoomConcertResponse {
  isOwner: boolean
  suites: OptionType[]
  score: string
}

export interface ScoreLocation {
  conductorCurrentPage: number
  conductorPages: number[]
  startingMeasure?: number
}
