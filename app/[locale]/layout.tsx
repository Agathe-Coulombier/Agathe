import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import type {Metadata} from 'next';
import {locales} from '@/i18n/locales';

export const dynamic = 'force-static';

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
      title: 'Agathe Coulombier',
      description: 'Portfolio',
      images: ['/og.png']
    },
    title: 'Agathe Coulombier',
    description: 'Portfolio'
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
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