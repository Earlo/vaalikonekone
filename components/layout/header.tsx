'use client';

import { useAppContext } from '@/context/appConteçxt';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { profile } = useAppContext();
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-xl">
          Vaalikonekone
        </Link>
      </div>
      <nav className="flex items-center">
        <Link
          className={`mx-4 hover:text-gray-500 ${
            pathname === '/' ? 'text-gray-500' : ''
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`mx-4 hover:text-gray-500 ${
            pathname === '/about' ? 'text-gray-500' : ''
          }`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`mx-4 hover:text-gray-500 ${
            pathname === '/contact' ? 'text-gray-500' : ''
          }`}
          href="/contact"
        >
          Contact
        </Link>
        {profile ? (
          <img
            src={profile.avatar_url || '/images/default-avatar.png'}
            alt="User Profile Avatar"
            className="w-8 h-8 rounded-full mx-4"
          />
        ) : (
          <Link
            className={`mx-4 hover:text-gray-500 ${
              pathname === '/login' ? 'text-gray-500' : ''
            }`}
            href="/login"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
