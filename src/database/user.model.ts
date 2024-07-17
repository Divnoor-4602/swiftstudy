import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username?: string;
  email: string;
  password?: string;
  picture?: string;
  cards?: Schema.Types.ObjectId[];
}

const userSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: false, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    picture: { type: String, required: false },
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
  },
  { timestamps: true }
);

const User = models.User || model<IUser>("User", userSchema);

export default User;
