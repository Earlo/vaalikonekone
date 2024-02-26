'use client';
import { useAppContext } from '@/context/appContext';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/generic/Avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/generic/DropdownMenu';
import { useSupabase } from '@/context/supabaseProvider';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaUser } from 'react-icons/fa';

export default function ProfileIcon() {
  const { profile } = useAppContext();
  const Router = useRouter();
  const pathname = usePathname();
  const { logOut } = useSupabase();

  return profile ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={profile.avatar_url ? profile.avatar_url : undefined}
          />
          <AvatarFallback>
            <FaUser className="mx-4 h-8 w-8" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {profile.full_name || 'My account'}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => Router.push('/profile')}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logOut}>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
