'use client';

import { useAppContext } from '@/context/appContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUser } from 'react-icons/fa';

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
        {profile ? (
          profile.avatar_url ? (
            <img
              src={profile.avatar_url}
              alt="User Profile Avatar"
              className="w-8 h-8 rounded-full mx-4"
            />
          ) : (
            <FaUser className="w-8 h-8 mx-4" />
          )
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
