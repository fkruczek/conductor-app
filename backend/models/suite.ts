import { Document, Model, model, Schema, Types } from 'mongoose'
import { PartDocument, partSchema, PartType } from './part'

// Schema
const suiteSchema = new Schema<SuiteDocument, SuiteModel>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  parts: [partSchema],
  currentMeasure: {
    type: Number,
    default: 0,
  },
})

export interface SuiteType {
  name: string
  parts: Array<PartType>
  currentMeasure?: number
}

interface SuiteBaseDocument extends SuiteType, Document {
  parts: Types.Array<PartDocument>
}

export type SuiteDocument = SuiteBaseDocument

export type SuitePopulatedDocument = SuiteBaseDocument

export type SuiteModel = Model<SuiteDocument>

// Default export
export default model<SuiteDocument, SuiteModel>('Suite', suiteSchema)
