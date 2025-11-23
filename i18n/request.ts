import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default getRequestConfig(async ({requestLocale}) => {
  // This will correspond to the `[locale]` segment from the URL
  let locale = await requestLocale;
  
  // Ensure we have a valid locale
  if (!locale || !['en', 'fr'].includes(locale)) {
    locale = 'en';
  }
  
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  } as any;
});
