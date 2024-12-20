"use server";

import { TUser } from "@/lib/api/createUser";
import { fetchSupertokens } from "@/lib/supertokens/fetchSupertokens";

type TSupertokensToken = {
  token: string;
  expiry: number;
  createdTime: number;
};

type TResponse = {
  status: string;
  session: {
    handle: string;
    userId: string;
    recipeUserId: string;
    userDataInJwt: TUser;
    tenantId: string;
  };
  accessToken: TSupertokensToken;
  refreshToken: TSupertokensToken;
};

export const createSupertokensSession = async (
  supertokensUserId: string,
  userData: TUser,
): Promise<TResponse> => {
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
