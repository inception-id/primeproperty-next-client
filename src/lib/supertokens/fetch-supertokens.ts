"use server";
import { env } from "../env";

export const fetchSupertokens = async <T>(
  path: string,
  options?: RequestInit,
): Promise<T> => {
  try {
    const response = await fetch(env.SUPERTOKENS_CONNECTION_URI + path, {
      headers: {
        "Content-Type": "application/json",
        "api-key": env.SUPERTOKENS_API_KEY,
      },
      ...options,
    });

    return response.json();
  } catch (error) {
    throw error;
  }
};
