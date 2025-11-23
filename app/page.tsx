import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Check if French is preferred
  const prefersFrench = acceptLanguage.toLowerCase().includes('fr');
  const locale = prefersFrench ? 'fr' : 'en';
  
  redirect(`/${locale}`);
}
