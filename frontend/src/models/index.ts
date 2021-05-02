export interface CreateRoomRequest {
  name: string
}

export interface RoomResponse {
  _id: string
  name: string
}

export interface LoginResponse {
  email: string
  name: string
  picture: string
  _id: string
}