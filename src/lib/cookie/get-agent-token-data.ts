import { decode, JwtPayload } from "jsonwebtoken";
import { getAccessToken } from "./get-access-token";
import { Agent } from "../api/agents/type";

export const getAgentTokenData = async () => {
  const token = await getAccessToken();
  if (!token) {
    return null;
  }

  const decoded = decode(token) as JwtPayload;
  return decoded as Agent;
};
