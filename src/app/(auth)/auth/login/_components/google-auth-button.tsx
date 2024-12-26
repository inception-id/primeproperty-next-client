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
import { createUser, TUser } from "@/lib/api/createUser";
import { usePathname, useRouter } from "next/navigation";
import { useId } from "react";
import { createSupertokensSession } from "@/lib/supertokens/createSupertokensSession";
import { embedCookieToken } from "@/lib/supertokens/embedCookieToken";
import { findUser } from "@/lib/api/findUser";
import { TApiResponse } from "@/lib/api/ApiResponse";
import { useLoginStore } from "@/app/(auth)/auth/login/_lib/useLoginStore";
import { useShallow } from "zustand/react/shallow";

const GoogleAuthButton = () => {
  const id = useId();
  const pathname = usePathname();
  const router = useRouter();

  const { updateStore } = useLoginStore(
    useShallow((state) => ({
      updateStore: state.updateStore,
    })),
  );

  const handleGoogleLogin = async (credential: CredentialResponse) => {
    try {
      const credentialToken = String(credential.credential);
      const jwtPayload = decode(credentialToken) as JwtPayload;
      const supertokens = await signupSupertokens(jwtPayload.email, id);
      let user: null | TApiResponse<TUser> = null;
      if (supertokens.status === SUPERTOKENS_EMAIL_ALREADY_EXIST) {
        user = await findUser(jwtPayload.email);
        if (!user.data) {
          toast.error("User does not exist, please register");
          return;
        }
      }

      if (supertokens.status === "OK") {
        user = await createUser(supertokens.recipeUserId, jwtPayload.email);
      }

      if (user?.data.id) {
        const token = await createSupertokensSession(
          String(user?.data.supertokens_user_id),
          user?.data,
        );
        const cookieToken = await embedCookieToken(
          token.accessToken.token,
          token.refreshToken.token,
        );
        if (cookieToken.accessToken && cookieToken.refreshToken) {
          toast.success("Sign in successful");
          if (pathname.includes("auth")) {
            router.push("/account");
          } else {
            updateStore("openLoginDialog", false);
          }
          return;
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

export default GoogleAuthButton;
