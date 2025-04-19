"use server";
import { cookies } from "next/headers";

export const removeTokenCookie = async () => {
  const cookieAccessToken = cookies().delete("accessToken");
  const cookieRefreshToken = cookies().delete("refreshToken");
  return {
    accessToken: cookieAccessToken?.toString(),
    refreshToken: cookieRefreshToken?.toString(),
  };
};
