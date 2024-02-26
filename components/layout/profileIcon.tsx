'use client';
import { useAppContext } from '@/context/appContext';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/generic/avatar';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaUser } from 'react-icons/fa';

export default function ProfileIcon() {
  const { profile } = useAppContext();
  const Router = useRouter();
  const pathname = usePathname();

  return profile ? (
    <Avatar>
      <AvatarImage
        onClick={() => Router.push('/profile')}
        src={profile.avatar_url ? profile.avatar_url : undefined}
      />
      <AvatarFallback>
        <FaUser className="mx-4 h-8 w-8" />
      </AvatarFallback>
    </Avatar>
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
