import { CreateSupertokensSessionResponse } from "./create-supertokens-session";
import { fetchSupertokens } from "./fetch-supertokens";

const PATH = "/recipe/session/refresh";
export const refreshSupertokensSession = async (refreshToken: string) => {
  const payload = {
    refreshToken,
    enableAntiCsrf: false,
    useDynamicSigningKey: true,
  };
  return await fetchSupertokens<CreateSupertokensSessionResponse>(PATH, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
