import { Agent } from "../api/agents/type";
import { fetchSupertokens } from "./fetch-supertokens";

export type CreateSupertokensSessionResponse = {
  session: Session;
  accessToken: AccessToken;
  refreshToken: RefreshToken;
  status: string;
};

type Session = {
  handle: string;
  userId: string;
  recipeUserId: string;
  userDataInJWT: Agent;
  tenantId: string;
};

type AccessToken = {
  token: string;
  expiry: number;
  createdTime: number;
};

type RefreshToken = {
  token: string;
  expiry: number;
  createdTime: number;
};

const PATH = "/recipe/session";
export const createSupertokensSession = async (
  supertokensUserId: string,
  userData: Agent,
) => {
  return await fetchSupertokens<CreateSupertokensSessionResponse>(PATH, {
    method: "POST",
    body: JSON.stringify({
      userId: supertokensUserId,
      userDataInJWT: userData,
      userDataInDatabase: userData,
      enableAntiCsrf: false,
    }),
  });
};
