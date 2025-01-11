"use server";
import { fetchSupertokens } from "@/lib/supertokens/fetchSupertokens";
import { TSupertokensSession } from "@/lib/supertokens/createSupertokensSession";
import { fetchCookieToken } from "@/lib/fetchCookieToken";

type TResponse = {
  status: string;
  session: TSupertokensSession;
  message: string;
};

export const verifySupertokensSession = async (
  defaultToken?: string,
): Promise<TResponse> => {
  const accessToken = await fetchCookieToken();
  try {
    const payload = {
      accessToken: defaultToken ?? accessToken,
      enableAntiCsrf: false,
      doAntiCsrfCheck: false,
      checkDatabase: true,
    };
    return await fetchSupertokens("/recipe/session/verify", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  } catch (e) {
    throw e;
  }
};
