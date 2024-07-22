import { Schema, Document, model, models } from "mongoose";

export interface IFlashcard extends Document {
  file: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  question: String;
  answer: String;
  lastStudied: Date;
}

const flashcardSchema = new Schema(
  {
    file: { type: Schema.Types.ObjectId, ref: "File", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    lastStudied: { type: Date },
  },
  { timestamps: true }
);

const Flashcard =
  models.Flashcard || model<IFlashcard>("FlashCard", flashcardSchema);

export default Flashcard;
