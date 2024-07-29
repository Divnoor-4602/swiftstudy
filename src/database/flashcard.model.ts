import { Schema, Document, model, models } from "mongoose";

export interface IFlashcard extends Document {
  file: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  question: String;
  answer: String;
  lastStudied: Date;
  status: string;
}

const flashcardSchema = new Schema(
  {
    file: { type: Schema.Types.ObjectId, ref: "File", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    status: { type: String, default: "Needs revising" },
    lastStudied: { type: Date },
  },
  { timestamps: true }
);

const Flashcard =
  models.FlashCard || model<IFlashcard>("FlashCard", flashcardSchema);

export default Flashcard;
