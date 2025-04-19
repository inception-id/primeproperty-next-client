import { Agent } from "../api/agents/type";
import { fetchSupertokens } from "./fetch-supertokens";

type Session = {
  handle: string;
  userId: string;
  recipeUserId: string;
  userDataInJwt: Agent;
  tenantId: string;
};

type VerifySupertokensSessionResponse = {
  status: string;
  session: Session;
};

const PATH = "/recipe/session/verify";
export const verifySupertokensSession = async (accessToken: string) => {
  const payload = {
    accessToken,
    enableAntiCsrf: false,
    doAntiCsrfCheck: false,
    checkDatabase: true,
  };
  return await fetchSupertokens<VerifySupertokensSessionResponse>(PATH, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
