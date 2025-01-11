"use server";

import { decode, JwtPayload } from "jsonwebtoken";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { env } from "@/lib/env";
import {fetchCookieToken} from "@/lib/fetchCookieToken";

export const changePassword = async (
  oldPassword: string,
  newPassword: string,
): Promise<TApiResponse<{ status: string; message: string }>> => {
  try {
    const accessToken = await fetchCookieToken();
    const decoded = decode(accessToken) as JwtPayload;

    const payload = {
      accessToken,
      oldPassword,
      newPassword,
      email: decoded.email,
      userId: decoded.supertokens_user_id,
    };

    const changePasswordResponse = await fetch(
      `${env.NEXT_PUBLIC_HOST_URL}/api/change-password`,
      { method: "POST", body: JSON.stringify(payload) },
    );
    return await changePasswordResponse.json();
  } catch (e) {
    throw e;
  }
};
