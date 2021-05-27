/* eslint-disable prettier/prettier */
import { RoomDocument } from 'models/room';
import { ObjectId } from 'mongoose';

export interface CreateRoomRequest {
  name: string
}

export interface LoginResponse {
  email: string
  name: string
  picture: string
  id: string
  ownedRoom: RoomDocument | null
}

interface LobbyPart {
  _id: ObjectId
  name: string
}

interface LobbySuite {
  _id: ObjectId
  name: string
  parts: LobbyPart[]
}

export interface RoomLobbyResponse {
  _id: ObjectId
  name: string
  suites: LobbySuite[]
  isOwner: boolean
}
