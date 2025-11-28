import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  try {
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as any)) {
      locale = routing.defaultLocale;
    }

    // Dynamic import of message JSON — keep this minimal and fail-safe.
    const messages = (await import(`./messages/${locale}.json`)).default;

    return {
      locale: locale as string,
      messages
    };
  } catch (err) {
    // Avoid throwing from middleware/request config. Fallback to default locale
    // with empty messages so that requests still succeed on Vercel.
    // You can log to a monitoring service here if desired.
    return {
      locale: routing.defaultLocale,
      messages: {}
    };
  }
});