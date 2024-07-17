import { Schema, Document, model, models } from "mongoose";

export interface ICard extends Document {
  name: String;
  user: Schema.Types.ObjectId;
  question: String;
  answer: String;
  uploadStatus: String;
  key: string;
  url: string;
}

const cardSchema = new Schema(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    uploadStatus: { type: String, required: true, default: "pending" },
    key: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const Card = models.Card || model<ICard>("Card", cardSchema);

export default Card;
