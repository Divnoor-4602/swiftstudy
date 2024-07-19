import File from "@/database/file.model";
import { databaseConnect } from "../mongoose";
import { DeleteFileParams } from "./shared.types";
import { revalidatePath } from "next/cache";

export async function deleteFileById(params: DeleteFileParams) {
  try {
    await databaseConnect();

    const { fileId, path } = params;

    const file = await File.findById(fileId);

    if (!file) {
      throw new Error("File not found");
    }

    await File.findByIdAndDelete(fileId);

    revalidatePath(path);

    // todo: delete all the associated flashcards
    // todo delete file from upload thing storage
  } catch (error) {
    console.log(error);
    throw error;
  }
}
