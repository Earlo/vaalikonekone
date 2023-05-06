'use client';

import { useAppContext } from '@/context/appContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUser } from 'react-icons/fa';

function isValidImageUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch (error) {
    return false;
  }
}

export default function ProfileIcon() {
  const { profile } = useAppContext();
  const pathname = usePathname();

  return profile ? (
    <Link
      className={`mx-4 hover:text-gray-500 ${
        pathname === '/profile' ? 'text-gray-500' : ''
      }`}
      href="/profile"
    >
      {profile.avatar_url && isValidImageUrl(profile.avatar_url) ? (
        <Image
          src={profile.avatar_url}
          alt="User Profile Avatar"
          className="w-8 h-8 rounded-full mx-4"
          width={32}
          height={32}
        />
      ) : (
        <FaUser className="w-8 h-8 mx-4" />
      )}
    </Link>
  ) : (
    <Link
      className={`mx-4 hover:text-gray-500 ${
        pathname === '/login' ? 'text-gray-500' : ''
      }`}
      href="/login"
    >
      Login
    </Link>
  );
}
