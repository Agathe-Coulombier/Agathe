import type { Metadata } from 'next';
import {NextIntlClientProvider} from 'next-intl';
import './globals.css';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {locales} from '@/i18n/locales';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: 'Agathe',
  description: 'Web Developer Portfolio'
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;       // 👈 await params
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
