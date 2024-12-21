"use server";

import { TUser } from "@/lib/api/createUser";
import { fetchSupertokens } from "@/lib/supertokens/fetchSupertokens";

type TSupertokensToken = {
  token: string;
  expiry: number;
  createdTime: number;
};

export type TSupertokensSession = {
  handle: string;
  userId: string;
  recipeUserId: string;
  userDataInJwt: TUser;
  tenantId: string;
};

export type TSupertokensSessionResponse = {
  status: string;
  session: TSupertokensSession;
  accessToken: TSupertokensToken;
  refreshToken: TSupertokensToken;
};

export const createSupertokensSession = async (
  supertokensUserId: string,
  userData: TUser,
): Promise<TSupertokensSessionResponse> => {
  try {
    const payload = {
      userId: supertokensUserId,
      userDataInJWT: userData,
      userDataInDatabase: userData,
      enableAntiCsrf: false,
    };

    return await fetchSupertokens("/recipe/session", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (e) {
    throw e;
  }
};
