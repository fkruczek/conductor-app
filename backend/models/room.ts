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
  suiteIds: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
  currentMeasure: {
    type: Number,
    default: 0,
  },
})

export interface RoomType {
  name: string
  owner: Types.ObjectId | UserDocument
  suiteIds: Types.ObjectId[]
  currentMeasure?: number
}

interface RoomBaseDocument extends RoomType, Document {}

// Export this for strong typing
export interface RoomDocument extends RoomBaseDocument {
  owner: UserDocument['_id']
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
