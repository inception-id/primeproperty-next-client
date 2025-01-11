"use server";
import { cookies } from "next/headers";

export const fetchCookieToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value as string;
};
