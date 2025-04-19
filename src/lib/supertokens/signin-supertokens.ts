import { fetchSupertokens } from "./fetch-supertokens";

type SupertokensSigninResponse = {
  status: string;
  user: User;
  recipeUserId: string;
};

type User = {
  id: string;
  isPrimaryUser: boolean;
  tenantIds: string[];
  timeJoined: number;
  emails: string[];
  phoneNumbers: any[];
  thirdParty: any[];
  loginMethods: LoginMethod[];
};

type LoginMethod = {
  tenantIds: string[];
  recipeUserId: string;
  verified: boolean;
  timeJoined: number;
  recipeId: string;
  email: string;
};

const PATH = "/recipe/signin";
export const signinSupertokens = async (email: string, password: string) => {
  return await fetchSupertokens<SupertokensSigninResponse>(PATH, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};
