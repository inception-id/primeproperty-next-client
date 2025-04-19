import { fetchSupertokens } from "./fetch-supertokens";

type CreateSupertokensResetPasswordTokenResponse = {
  status: string;
  token: string;
};

const PATH = "/recipe/user/password/reset/token";
export const createSupertokensResetPasswordToken = async (
  userId: string,
  email: string,
) => {
  return await fetchSupertokens<CreateSupertokensResetPasswordTokenResponse>(
    PATH,
    {
      method: "POST",
      body: JSON.stringify({ userId, email }),
    },
  );
};
