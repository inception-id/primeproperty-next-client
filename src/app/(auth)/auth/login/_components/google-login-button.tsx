"use client";
import { toast } from "react-toastify";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import { env } from "@/lib/env";
import { decode, JwtPayload } from "jsonwebtoken";
import { findUser } from "@/lib/api/findUser";
import { createSupertokensSession } from "@/lib/supertokens/createSupertokensSession";
import { embedCookieToken } from "@/lib/supertokens/embedCookieToken";
import { useRouter } from "next/navigation";

const GoogleLoginBtn = () => {
  const router = useRouter();

  const handleGoogleLogin = async (credential: CredentialResponse) => {
    //
    try {
      const credentialToken = String(credential.credential);
      const jwtPayload = decode(credentialToken) as JwtPayload;
      const user = await findUser(jwtPayload.email);
      if (!user.data) {
        toast.error("User does not exist, please register");
        return;
      }

      const token = await createSupertokensSession(
        String(user.data.supertokens_user_id),
        user.data,
      );
      const cookieToken = await embedCookieToken(
        token.accessToken.token,
        token.refreshToken.token,
      );
      if (cookieToken.accessToken && cookieToken.refreshToken) {
        toast.success("Sign in successful");
        router.push("/account");
        return;
      }

      toast.error(user.message);
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

export default GoogleLoginBtn;
