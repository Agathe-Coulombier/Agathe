import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  // This will correspond to the `[locale]` segment from the URL
  const locale = await requestLocale;
  
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  } as any;
});
