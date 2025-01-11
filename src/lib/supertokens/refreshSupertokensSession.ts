"use server";
import { cookies } from "next/headers";
import { fetchSupertokens } from "@/lib/supertokens/fetchSupertokens";
import { TSupertokensSessionResponse } from "@/lib/supertokens/createSupertokensSession";

export const refreshSupertokensSession =
  async (): Promise<TSupertokensSessionResponse> => {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refreshToken")?.value as string;
    try {
      return await fetchSupertokens("/recipe/session/refresh", {
        method: "POST",
        body: JSON.stringify({ refreshToken, enableAntiCsrf: false }),
      });
    } catch (error) {
      throw error;
    }
  };
