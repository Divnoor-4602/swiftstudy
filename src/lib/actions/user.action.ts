import User from "@/database/user.model";
import { databaseConnect } from "../mongoose";
import { CreateUserParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";

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

    await User.findOneAndDelete({ clerkId });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
