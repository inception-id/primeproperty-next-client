"use server";
import supertokens from "supertokens-node";
import { initializeSupertokens } from "./initialize-supertokens";

initializeSupertokens();

type SupertokensUser = {
  id: string;
  emails: string[];
};

export const getSupertokensUserByEmail = async (
  email: string,
): Promise<SupertokensUser | null> => {
  try {
    const usersInfo = await supertokens.listUsersByAccountInfo("public", {
      email,
    });
    if (usersInfo.length === 0) {
      return null;
    }
    return {
      id: usersInfo[0].id,
      emails: usersInfo[0].emails,
    };
  } catch (error) {
    throw error;
  }
};
