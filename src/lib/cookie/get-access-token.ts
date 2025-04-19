"use server";

import { cookies } from "next/headers";

export const getAccessToken = async () => {
  return cookies().get("accessToken")?.value as string;
};
