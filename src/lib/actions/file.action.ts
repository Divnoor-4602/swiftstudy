"use server";

import File from "@/database/file.model";
import { databaseConnect } from "../mongoose";
import { DeleteFileParams, GetFileParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import User from "@/database/user.model";

export async function createFile(params: any) {
  try {
    await databaseConnect();

    const { name, url, key, clerkId, uploadStatus } = params;

    // check if the user exists

    const existingUser = await User.findOne({ clerkId });

    if (!existingUser) {
      throw new Error("User not found");
    }

    // creating file in the database

    const file = await File.create({
      name,
      url,
      key,
      user: existingUser._id,
      uploadStatus,
    });

    // add the file to the user's file list

    await User.findByIdAndUpdate(existingUser._id, {
      $addToSet: { files: file._id },
    });

    return file;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create file");
  }
}

export async function getFile(params: GetFileParams) {
  try {
    await databaseConnect();

    const { key, clerkId } = params;

    const user = await User.findById({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    const file = await File.findOne({ key, user: user._id });

    if (!file) {
      throw new Error("File not found");
    } else {
      revalidatePath(`/dashboard/${file._id}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get file");
  }
}

export async function deleteFileById(params: DeleteFileParams) {
  try {
    await databaseConnect();

    const { fileId, path, clerkId } = params;

    const file = await File.findById(fileId);

    if (!file) {
      throw new Error("File not found");
    }

    await File.findByIdAndDelete(fileId);

    // delete file from the user's file list

    await User.findOneAndUpdate(
      { clerkId },
      {
        $pull: { files: fileId },
      }
    );

    revalidatePath(path);

    // todo: delete all the associated flashcards
  } catch (error) {
    console.log(error);
    throw error;
  }
}
