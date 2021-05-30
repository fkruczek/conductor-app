import { Document, Model, Schema } from 'mongoose'

export const partSchema = new Schema<PartDocument, PartModel>({
  name: {
    type: String,
    required: true,
  },
  musicXML: {
    type: String,
    required: true,
  },
  isConductors: {
    type: Boolean,
    required: true,
  },
})

export interface PartType {
  name: string
  musicXML: string
  isConductors: boolean
}

interface PartBaseDocument extends PartType, Document {}

export type PartDocument = PartBaseDocument

export type PartModel = Model<PartDocument>

// export default model<PartDocument, PartModel>('Part', partSchema)
