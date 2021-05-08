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
}

export interface RoomListResponse {
  _id: string
  name: string
}

export interface LoginResponse {
  email: string
  name: string
  picture: string
  _id: string
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
