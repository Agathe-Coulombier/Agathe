'use client';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: 'en'|'fr') {
    const segments = pathname.split('/');
    segments[1] = next; // /[locale]/...
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`; // persist 1y
    router.push(segments.join('/'));
  }

  return (
    <div className="flex gap-2 text-sm">
      <button onClick={() => switchTo('fr')} aria-pressed={locale==='fr'} className="opacity-80 hover:opacity-100">FR</button>
      <span className="opacity-40">/</span>
      <button onClick={() => switchTo('en')} aria-pressed={locale==='en'} className="opacity-80 hover:opacity-100">EN</button>
    </div>
  );
}
