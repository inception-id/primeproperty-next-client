"use server";
import { fetchSupertokens } from "@/lib/supertokens/fetchSupertokens";

type TResponse = {
  status: string;
  token: string;
}
export const createEmailVerificationToken= async (
  userId: string, //supertokens user id
  email: string,
): Promise<TResponse> => {
  try {
    return await fetchSupertokens("/recipe/user/email/verify/token", {
      method: "POST",
      body: JSON.stringify({ userId, email }),
    });
  } catch (error) {
    throw error;
  }
};
