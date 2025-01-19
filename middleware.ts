import { NextRequest, NextResponse } from 'next/server';

const publicRoutes = ['/login', '/error'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get('refresh_token')?.value;

  console.log(
    `Path: ${path}, Refresh Token: ${token ? 'Exists' : 'Not Found'}`
  );

  try {
    // Public route with an authenticated user
    if (publicRoutes.includes(path) && token) {
      console.log(
        `Authenticated user trying to access a public route. Redirecting to /chemoventry.`
      );
      return NextResponse.redirect(new URL('/chemoventry', req.nextUrl));
    }

    // Protected route without a refresh token
    if (!publicRoutes.includes(path) && !token) {
      console.log(
        `Unauthenticated user trying to access a protected route. Redirecting to /login.`
      );
      return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    // Allow access to other routes
    return NextResponse.next();
  } catch (error) {
    console.error(
      `Middleware error: ${error instanceof Error ? error.message : error}`
    );
    return NextResponse.redirect(new URL('/error', req.nextUrl));
  }
}

// Routes Middleware should run on
export const config = {
  matcher: ['/', '/login', '/chemoventry/:path*', '/error'],
};
