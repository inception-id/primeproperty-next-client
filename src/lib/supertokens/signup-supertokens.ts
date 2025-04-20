import { fetchSupertokens } from "./fetch-supertokens";

type SupertokensSignupResponse = {
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

const PATH = "/recipe/signup";
export const signupSupertokens = async (email: string) => {
  return await fetchSupertokens<SupertokensSignupResponse>(PATH, {
    method: "POST",
    body: JSON.stringify({ email, password: new Date().toISOString() }),
  });
};
