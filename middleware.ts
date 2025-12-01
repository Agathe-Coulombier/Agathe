import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {NextResponse, type NextRequest} from 'next/server';

// Create the next-intl middleware instance
const nextIntlMiddleware = createMiddleware(routing);

// Wrap the middleware call in a try/catch to avoid unhandled exceptions in
// the Edge/runtime environment causing a 500 MIDDLEWARE_INVOCATION_FAILED.
// This lets the app continue to serve pages even if the i18n middleware
// hits an unexpected runtime error on the deployment platform.
export default async function middleware(request: NextRequest) {
  try {
    // Delegate to next-intl's middleware
    return await nextIntlMiddleware(request as any);
  } catch (err) {
    // Log to stdout/stderr so Vercel/Edge logs capture the cause and
    // return a safe NextResponse to avoid a hard 500 for end users.
    // eslint-disable-next-line no-console
    console.error('middleware error:', err);
    return NextResponse.next();
  }
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};