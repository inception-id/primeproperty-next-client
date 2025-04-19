import { fetchSupertokens } from "./fetch-supertokens";

type SupertokensSessionRemovalResponse = {
  status: string;
};

const PATH = "/recipe/session/remove";
export const removeSupertokensSession = async (userId: string) => {
  return await fetchSupertokens<SupertokensSessionRemovalResponse>(PATH, {
    method: "POST",
    body: JSON.stringify({ userId }),
  });
};
