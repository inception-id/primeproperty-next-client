"use server";
import { cookies } from "next/headers";

export const createTokenCookie = async (
  accessToken: string,
  refreshToken: string,
) => {
  const cookieAccessToken = cookies().set("accessToken", accessToken);
  const cookieRefreshToken = cookies().set("refreshToken", refreshToken);
  return {
    accessToken: cookieAccessToken.toString(),
    refreshToken: cookieRefreshToken.toString(),
  };
};
