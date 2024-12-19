"use server";
import { fetchSupertokens } from "@/lib/supertokens/fetchSupertokens";

type TLoginMethod = {
  tenantIds: string[];
  recipeUserId: string;
  verified: boolean;
  timeJoined: number;
  recipeId: string;
  email: string;
};

type TResponse = {
  status: string;
  user: {
    id: string;
    isPrimaryUser: boolean;
    tenantIds: string[];
    timeJoined: number;
    emails: string[];
    phoneNumbers: any[];
    thirdParty: any[];
    loginMethods: TLoginMethod[];
  };
  recipeUserId: string;
};

export const signupSupertokens = async (
  email: string,
  password: string,
): Promise<TResponse> => {
  try {
    return await fetchSupertokens("/recipe/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  } catch (error) {
    throw error;
  }
};
