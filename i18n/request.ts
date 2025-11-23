import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  // Wait for the locale from the request
  const locale = await requestLocale;
  
  // Ensure it's a valid locale, default to 'en'
  const active = (locale === 'fr' || locale === 'en') ? locale : 'en';
  const messages = (await import(`./messages/${active}.json`)).default;
  
  return {
    locale: active,
    messages
  };
});
