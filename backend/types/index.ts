export interface CreateRoomRequest {
  name: string
}

export interface RoomResponse {
  id: string
  name: string
}

export interface LoginResponse {
  email: string
  name: string
  picture: string
  _id: string
}
