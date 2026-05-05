import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isProtectedAdminRoute =
    pathname.startsWith("/admin") && pathname !== "/admin/login";

  const hasToken = request.cookies.get("token")?.value;

  if (isProtectedAdminRoute && !hasToken) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/admin"],
};
