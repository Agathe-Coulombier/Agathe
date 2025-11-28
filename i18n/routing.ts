import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always show the locale prefix
  localePrefix: 'always'
});

// NOTE: Do NOT call `createNavigation` here. This file is imported by
// `middleware.ts` which runs in the Edge runtime. Importing navigation
// helpers (which depend on Next.js client/server navigation APIs) can
// pull in Node/browser-only code into the Edge middleware and cause
// runtime failures on Vercel. If you need the helpers, create them in
// client/server-specific modules where appropriate:
//   - Client components: import {createNavigation} from 'next-intl/navigation' and
//     call createNavigation(routing) inside the component or client-only module.
//   - Server components: use server-safe APIs.
