"use server";
import { fetchSupertokens } from "@/lib/supertokens/fetchSupertokens";
import { TSupertokensAuthResponse } from "@/lib/supertokens/signupSupertokens";

export const signinSupertokens = async (
  email: string,
  password: string,
): Promise<TSupertokensAuthResponse> => {
  try {
    return await fetchSupertokens("/recipe/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  } catch (error) {
    throw error;
  }
};
