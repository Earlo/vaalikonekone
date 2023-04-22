'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
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
      </nav>
    </header>
  );
}
