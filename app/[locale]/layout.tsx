import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type {Metadata} from 'next';
import {locales} from '@/i18n/locales';

export async function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata(
  props: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await props.params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agathe-coulombier.vercel.app';

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      languages: { en: `${baseUrl}/en`, fr: `${baseUrl}/fr` }
    },
    openGraph: {
      type: 'website',
      url: `${baseUrl}/${locale}`,
      title: locale === 'fr' ? 'Agathe — Développeuse Web' : 'Agathe — Web Developer',
      description:
        locale === 'fr'
          ? 'Portfolio minimal, inspirations océanes.'
          : 'Minimal portfolio with ocean inspirations.',
      images: ['/og.png']
    },
    title: locale === 'fr' ? 'Agathe — Développeuse Web' : 'Agathe — Web Developer',
    description:
      locale === 'fr'
        ? 'Portfolio minimal, inspirations océanes.'
        : 'Minimal portfolio with ocean inspirations.'
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body className="min-h-screen text-ink body-gradient">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
