import { NextRequest, NextResponse } from 'next/server';

const publicRoutes = ['/login'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isPublicPath = publicRoutes.includes(path);

  const token = req.cookies.get('access_token')?.value;

  try {
    if (isPublicPath && token) {
      console.log(
        `Authenticated user trying to access a public route. Redirecting to /chemoventry.`
      );
      return NextResponse.redirect(new URL('/chemoventry', req.nextUrl));
    }

    if (!isPublicPath && !token) {
      console.log(
        `Unauthenticated user trying to access a protected route. Redirecting to /login.`
      );
      return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    // if (path === '/logout') {
    //   return NextResponse.redirect(new URL('/login', req.nextUrl));
    // }

    // If all conditions are met, continue processing the request
    return NextResponse.next();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Middleware error: ${error.message}`);
    } else {
      console.error('Middleware error:', error);
    }
    // Optional: Redirect to an error page or return a custom error response
    return NextResponse.redirect(new URL('/error', req.nextUrl));
  }
}

// Routes Middleware should run on
export const config = {
  matcher: ['/', '/login', '/chemoventry/:path*'],
};
