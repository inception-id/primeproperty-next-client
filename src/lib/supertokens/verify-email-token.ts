"use server";
import { fetchSupertokens } from "@/lib/supertokens/fetchSupertokens";

type TResponse = {
  status: string;
  userId: string;
  email: string;
};
export const verifyEmailToken = async (
  token: string,
): Promise<TResponse> => {
  try {
    return await fetchSupertokens("/recipe/user/email/verify", {
      method: "POST",
      body: JSON.stringify({ method: "token", token }),
    });
  } catch (error) {
    throw error;
  }
};
