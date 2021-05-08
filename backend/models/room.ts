import { Document, model, Model, Schema, Types } from 'mongoose'
import { UserDocument } from './user'

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
  currentMeasure: {
    type: Number,
    default: 0,
  },
  currentSuiteId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
})

export interface RoomType {
  name: string
  owner: Types.ObjectId | UserDocument
  suites: Types.ObjectId[]
  currentMeasure?: number
  currentSuiteId: Types.ObjectId
}

interface RoomBaseDocument extends RoomType, Document {}

// Export this for strong typing
export interface RoomDocument extends RoomBaseDocument {
  owner: Types.ObjectId
}

// Export this for strong typing
export interface RoomPopulatedDocument extends RoomBaseDocument {
  owner: UserDocument
}

// For model
export interface RoomModel extends Model<RoomDocument> {
  findMyOwner(id: string): Promise<RoomPopulatedDocument>
}

// Static methods
RoomSchema.statics.findMyOwner = async function (this: Model<RoomDocument>, id: string) {
  return this.findById(id).populate('owner').exec()
}

// Default export
export default model<RoomDocument, RoomModel>('Room', RoomSchema)
