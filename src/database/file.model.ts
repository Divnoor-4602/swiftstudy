import { Schema, Document, model, models } from "mongoose";

export interface IFile extends Document {
  name: String;
  user: Schema.Types.ObjectId;
  flashcards?: Schema.Types.ObjectId[];
  uploadStatus: String;
  key: string;
  url: string;
}

const fileSchema = new Schema(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    flashcards: [{ type: Schema.Types.ObjectId, ref: " " }],
    uploadStatus: { type: String, required: true, default: "pending" },
    key: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

const File = models.File || model<IFile>("File", fileSchema);

export default File;
