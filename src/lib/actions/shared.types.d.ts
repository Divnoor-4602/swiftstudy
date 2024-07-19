import { IUser } from "@/database/user.model";
import { Schema } from "mongoose";

export interface CreateUserParams {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
  password?: string;
}

export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
  path: string;
}

export interface GetUserFilesParams {
  clerkId: string;
  page?: number;
  pageSize?: number;
}

export interface DeleteFileParams {
  fileId: string;
  path: string;
}
