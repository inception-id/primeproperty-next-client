"use server";
import { deleteUser } from "supertokens-node";
import { initializeSupertokens } from "./initialize-supertokens";

initializeSupertokens();
export const deleteSupertokensUser = async (userId: string) => {
  try {
    return await deleteUser(userId);
  } catch (error) {
    throw error;
  }
};
