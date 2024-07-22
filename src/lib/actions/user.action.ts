"use server";

import User from "@/database/user.model";
import { databaseConnect } from "../mongoose";
import {
  CreateUserParams,
  GetUserFilesParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import File from "@/database/file.model";
import Flashcard from "@/database/flashcard.model";

export async function createUser(params: CreateUserParams) {
  try {
    await databaseConnect();

    const user = await User.create(params);

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserFiles(params: GetUserFilesParams) {
  try {
    await databaseConnect();

    const { clerkId } = params;

    const user = await User.findOne({ clerkId });

    if (!user) throw new Error("User not found!");

    const files = await File.find({ user: user._id });

    console.log("files", files);

    return files;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    await databaseConnect();

    const { clerkId, updateData, path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: { clerkId: string }) {
  try {
    await databaseConnect();

    const { clerkId } = params;

    const user = await User.findOneAndDelete({ clerkId }, { new: true });

    // delete the related flashcards and files

    await File.findOneAndDelete({ user: user._id });

    await Flashcard.findOneAndDelete({ user: user._id });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
