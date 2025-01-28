import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //   const hasNhostSession =
  //     request.cookies.has("nhostRefreshToken") &&
  //     request.cookies.has("nhostRefreshTokenId") &&
  //     request.cookies.has("nhostRefreshTokenExpiresAt");
  //   const protectedRoutes = ["/"];
  //   const isLoginPage = request.nextUrl.pathname === "/login";
  //   const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);
  //   if (hasNhostSession) {
  //     if (isLoginPage) {
  //       return NextResponse.redirect(new URL("/", request.url));
  //     }
  //     return NextResponse.next();
  //   }
  //   if (isProtectedRoute || !isLoginPage) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  //   return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};
