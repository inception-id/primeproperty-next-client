"use server";
import { fetchSupertokens } from "@/lib/supertokens/fetchSupertokens";

export type TSupertokensLoginMethod = {
  tenantIds: string[];
  recipeUserId: string;
  verified: boolean;
  timeJoined: number;
  recipeId: string;
  email: string;
};

export type TSupertokensAuthResponse = {
  status: string;
  user: {
    id: string;
    isPrimaryUser: boolean;
    tenantIds: string[];
    timeJoined: number;
    emails: string[];
    phoneNumbers: any[];
    thirdParty: any[];
    loginMethods: TSupertokensLoginMethod[];
  };
  recipeUserId: string;
};

export const signupSupertokens = async (
  email: string,
  password: string,
): Promise<TSupertokensAuthResponse> => {
  try {
    return await fetchSupertokens("/recipe/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  } catch (error) {
    throw error;
  }
};
