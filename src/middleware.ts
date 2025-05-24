import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  // Define public and private routes
  // const publicRoutes = ["/login", "/signup"];
  const privateRoutes = ["/checkout", "/cart", "/order"];

  // const isPublicRoute = publicRoutes.some((route) =>
  //   request.nextUrl.pathname.startsWith(route)
  // );

  const isPrivateRoute = privateRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isPrivateRoute && !token) {
    // Redirect to signin if trying to access a private route without a token
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // if (isPublicRoute && token) {
  //   // Redirect to dashboard if trying to access a public route with a token
  //   return NextResponse.redirect(new URL("/checkout", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/checkout",
    "/checkout/:path*",
    "/cart",
    "/cart/:path*",
    "/order",
    "/order/:path*",
  ],
};
