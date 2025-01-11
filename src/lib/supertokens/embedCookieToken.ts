"use server";
import { cookies } from "next/headers";

export const embedCookieToken = async (
  accessToken: string,
  refreshToken: string,
) => {
  // one day
  const cookieStore = await cookies();
  cookieStore.set("accessToken", accessToken, { maxAge: 60 * 60 * 24 });
  cookieStore.set("refreshToken", refreshToken, { maxAge: 60 * 60 * 24 });

  return { accessToken, refreshToken };
};
