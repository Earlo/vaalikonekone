'use client';

import ProfileIcon from '@/components/layout/ProfileIcon';
import { cn } from '@/lib/utils';
import Link from 'next/link';
//import { usePathname } from 'next/navigation';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

export default function Header() {
  // const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/" className={cn('text-xl font-bold')}>
          Vaalikonekone
        </Link>
      </div>
      <div className={cn('flex items-center space-x-4')}>
        {theme === 'dark' ? (
          <MoonIcon
            onClick={() => setTheme('light')}
            className="h-6 w-6 cursor-pointer"
          />
        ) : (
          <SunIcon
            onClick={() => setTheme('dark')}
            className="h-6 w-6 cursor-pointer"
          />
        )}
        <nav className="flex items-center">
          <ProfileIcon />
        </nav>
      </div>
    </header>
  );
}
