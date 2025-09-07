import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const active = (locale === 'fr' || locale === 'en') ? locale : 'en';
  const messages = (await import(`./messages/${active}.json`)).default;
  return {locale: active, messages};
});
