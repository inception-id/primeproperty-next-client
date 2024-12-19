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
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ApiKey: env.API_KEY,
        Authorization: requireToken
          ? (cookies().get("AccessToken")?.value as string)
          : "",
        ...init?.headers,
      },
      ...init,
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
};
