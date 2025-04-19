import { fetchSupertokens } from "./fetch-supertokens";

type ConsumeSupertokensResetPasswordTokenResponse = {
  status: string;
  userId: string;
  email: string;
};

const PATH = "/recipe/user/password/reset/token/consume";
export const consumeSupertokensResetPasswordToken = async (token: string) => {
  return await fetchSupertokens<ConsumeSupertokensResetPasswordTokenResponse>(
    PATH,
    {
      method: "POST",
      body: JSON.stringify({ token }),
    },
  );
};
