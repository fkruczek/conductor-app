import { Document, model, Model, Schema, Types } from 'mongoose'

// Schema
const RoomSchema = new Schema<RoomDocument, RoomModel>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  suites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Suite',
    },
  ],
  currentSuiteId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
})

export interface RoomBase {
  name: string
  owner: Types.ObjectId
  suites: Types.ObjectId[] | HalfPopulatedSuite[]
  currentSuiteId: Types.ObjectId
}

interface RoomBaseDocument extends RoomBase, Document {}

export interface RoomDocument extends RoomBaseDocument {
  owner: Types.ObjectId
}

interface HalfPopulatedSuite extends Document {
  name: string
  parts: { name: string; _id: Types.ObjectId; isConductors: boolean }[]
}

export interface RoomPopulatedDocument extends RoomBaseDocument {
  suites: HalfPopulatedSuite[]
}

export interface RoomModel extends Model<RoomDocument> {
  // findMyOwner(id: string): Promise<RoomPopulatedDocument>
  findForLobby(id: string): Promise<RoomPopulatedDocument>
}

// Static methods
// RoomSchema.statics.findMyOwner = async function (this: Model<RoomDocument>, id: string) {
//   return this.findById(id).populate('owner').exec()
// }

RoomSchema.statics.findForLobby = async function (this: Model<RoomDocument>, id: string) {
  return this.findById(id).populate({
    path: 'suites',
    select: 'name parts.name parts._id',
  })
}

export default model<RoomDocument, RoomModel>('Room', RoomSchema)
