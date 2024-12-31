"use server";
import { cookies } from "next/headers";

export const embedCookieToken = async (
  accessToken: string,
  refreshToken: string,
) => {
  // one day
  cookies().set("accessToken", accessToken, { maxAge: 60 * 60 * 24});
  cookies().set("refreshToken", refreshToken, { maxAge: 60 * 60 * 24});

  return { accessToken, refreshToken };
};
