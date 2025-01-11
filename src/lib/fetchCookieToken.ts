"use server";
import { cookies } from "next/headers";

export const fetchCookieToken = async () => {
  return cookies().get("accessToken")?.value;
};
