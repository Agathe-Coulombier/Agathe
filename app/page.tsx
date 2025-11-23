'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    const locale = browserLang.startsWith('fr') ? 'fr' : 'en';
    
    router.replace(`/${locale}`);
  }, [router]);
  
  // Show minimal loading state
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'system-ui'
    }}>
      Loading...
    </div>
  );
}
