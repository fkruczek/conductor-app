import { Document, Model, model, Schema } from 'mongoose'

const UserSchema = new Schema<UserDocument, UserModel>({
  name: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  picture: {
    type: String,
    required: true,
    lowercase: true,
  },
})

export interface UserType {
  name: string
  email: string
  picture: string
}

interface UserBaseDocument extends UserType, Document {}

export type UserDocument = UserBaseDocument

export type UserModel = Model<UserDocument>

export default model<UserDocument, UserModel>('User', UserSchema)
