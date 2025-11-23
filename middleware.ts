import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export default middleware;

export const config = {
  matcher: ['/', '/(fr|en)/:path*']
};
