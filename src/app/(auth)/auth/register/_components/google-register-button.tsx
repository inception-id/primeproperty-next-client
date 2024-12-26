"use client";
import { toast } from "react-toastify";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import { env } from "@/lib/env";
import { decode, JwtPayload } from "jsonwebtoken";
import { signupSupertokens } from "@/lib/supertokens/signupSupertokens";
import { SUPERTOKENS_EMAIL_ALREADY_EXIST } from "@/lib/supertokens/constant";
import { createUser } from "@/lib/api/createUser";
import { useRouter } from "next/navigation";
import { useId } from "react";
import { createSupertokensSession } from "@/lib/supertokens/createSupertokensSession";
import { embedCookieToken } from "@/lib/supertokens/embedCookieToken";

const GoogleRegisterButton = () => {
  const router = useRouter();
  const id = useId();

  const handleGoogleLogin = async (credential: CredentialResponse) => {
    try {
      const credentialToken = String(credential.credential);
      const jwtPayload = decode(credentialToken) as JwtPayload;
      const supertokens = await signupSupertokens(jwtPayload.email, id);
      if (supertokens.status === SUPERTOKENS_EMAIL_ALREADY_EXIST) {
        toast.error("Email already exist, please login");
        return;
      }

      if (supertokens.status === "OK") {
        const user = await createUser(
          supertokens.recipeUserId,
          jwtPayload.email,
        );
        if (user.data?.id) {
          const token = await createSupertokensSession(
            String(user.data.supertokens_user_id),
            user.data,
          );
          const cookieToken = await embedCookieToken(
            token.accessToken.token,
            token.refreshToken.token,
          );
          if (cookieToken.accessToken && cookieToken.refreshToken) {
            toast.success("Sign up successful");
            router.push("/account");
            return;
          }
        }
      }

      toast.error("Something went wrong, please try again.");
      return;
    } catch (error: any) {
      toast.error("Something went wrong, please try again.");
      console.error(error.message);
      return;
    }
  };

  return (
    <GoogleOAuthProvider clientId={env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        locale={navigator.language}
        onSuccess={handleGoogleLogin}
        onError={() => toast("Something went wrong, please try again")}
        text="continue_with"
        theme="filled_blue"
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleRegisterButton;
