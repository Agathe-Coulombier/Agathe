import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agathe',
  description: 'Web Developer Portfolio'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
