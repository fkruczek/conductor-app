/* eslint-disable prettier/prettier */
import { RoomDocument } from 'models/room';

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
  id: string
  ownedRoom: RoomDocument | null
}
