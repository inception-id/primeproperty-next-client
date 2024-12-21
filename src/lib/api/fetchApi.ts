"use server";
import { env } from "@/lib/env";
import { cookies } from "next/headers";

export const fetchApi = async (
  requireToken: boolean,
  path: string,
  init?: RequestInit,
) => {
  try {
    const url = env.API_URL + path;
    const accessToken = requireToken
      ? (cookies().get("accessToken")?.value as string)
      : "";
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiKey: env.API_KEY,
        AccessToken: accessToken,
        ...init?.headers,
      },
      ...init,
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
};
