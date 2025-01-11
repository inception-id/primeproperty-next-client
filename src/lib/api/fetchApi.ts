"use server";
import { env } from "@/lib/env";
import { cookies } from "next/headers";

export const fetchApi = async (path: string, init?: RequestInit) => {
  try {
    const url = env.API_URL + path;
    const accessToken = cookies().get("accessToken")?.value as string;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.API_KEY,
        "x-access-token": accessToken,
        ...init?.headers,
      },
      ...init,
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
};
