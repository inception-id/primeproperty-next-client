import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decode, JwtPayload } from "jsonwebtoken";
import { refreshSupertokensSession } from "@/lib/supertokens/refreshSupertokensSession";
import { embedCookieToken } from "@/lib/supertokens/embedCookieToken";
import { removeCookieToken } from "@/lib/supertokens/removeCookieToken";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value as string;
  const loginRedirect = NextResponse.redirect(
    new URL("/auth/login", request.url),
  );
  if (!accessToken) {
    return loginRedirect;
  }

  const response = NextResponse.next();
  const jwtPayload = decode(accessToken) as JwtPayload;
  if (new Date().getTime() > Number(jwtPayload.exp) * 1000) {
    const newSession = await refreshSupertokensSession();
    if (newSession?.accessToken?.token && newSession?.refreshToken?.token) {
      await embedCookieToken(
        newSession.accessToken.token,
        newSession.refreshToken.token,
      );
      return response;
    } else {
      await removeCookieToken();
      return loginRedirect;
    }
  }

  return response;
}

export const config = {
  matcher: ["/account/:path"],
};
