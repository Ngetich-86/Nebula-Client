'use client';

import { usePathname } from 'next/navigation';
import Landing from '@/pages/Landing';
import Feed from '@/pages/Feed';

export default function Page() {
  const pathname = usePathname();

  // Render different components based on the current path
  switch (pathname) {
    case '/feed':
      return <Feed />;
    case '/':
    default:
      return <Landing />;
  }
}

