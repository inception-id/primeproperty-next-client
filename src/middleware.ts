import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { refreshSupertokensSession } from "@/lib/supertokens/refreshSupertokensSession";
import {verifySupertokensSession} from "@/lib/supertokens/verifySupertokensSession";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value ;
  const loginRedirect = NextResponse.redirect(
      new URL("/auth/login", request.url),
  );
    const response = NextResponse.next();
  if (request.nextUrl.pathname.includes("/account") && !accessToken) {
      return loginRedirect;
  }

  try {
    if (accessToken) {
      const isSessionVerified = await verifySupertokensSession(accessToken);
      if (isSessionVerified.status !== "OK") {
        const newSession = await refreshSupertokensSession();
        if (newSession.status === "OK") {
          response.cookies.set("accessToken", newSession.accessToken.token);
          response.cookies.set("refreshToken", newSession.refreshToken.token);
        } else {
          response.cookies.delete("accessToken");
          response.cookies.delete("refreshToken");
        }
      }
    }

    return response;
  } catch (e) {
    console.error("MIDDLEWARE ERRROR:\n", e);
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|sitemap.xml|robots.txt|home|auth|supertokens).*)",
  ],
};
