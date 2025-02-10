"use server";
import { fetchSupertokens } from "@/lib/supertokens/fetchSupertokens";
import { decode, JwtPayload } from "jsonwebtoken";
import {fetchCookieToken} from "@/lib/fetchCookieToken";

type TResponse = { status: string; sessionHandlesRevoked: string[] };

export const removeSupertokensSession = async (): Promise<TResponse> => {
  const accessToken = await fetchCookieToken() as string;
  const decoded = decode(accessToken) as JwtPayload;
  try {
    return await fetchSupertokens("/recipe/session/remove", {
      method: "POST",
      body: JSON.stringify({ userId: decoded.supertokens_user_id }),
    });
  } catch (error) {
    throw error;
  }
};
