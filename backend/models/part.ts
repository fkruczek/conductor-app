import { Document, Model, Schema } from 'mongoose'

// Schema
export const partSchema = new Schema<PartDocument, PartModel>({
  name: {
    type: String,
    required: true,
  },
  musicXML: {
    type: String,
    required: true,
  },
})

export interface PartType {
  name: string
  musicXML: string
}

interface PartBaseDocument extends PartType, Document {}

export type PartDocument = PartBaseDocument

export type RoomPopulatedDocument = PartBaseDocument

export type PartModel = Model<PartDocument>

// export default model<PartDocument, PartModel>('Part', partSchema)
