'use client';
import { useAppContext } from '@/context/appContext';
import { useRouter } from 'next/router';

export default async function ProfilePage() {
  const { profile } = useAppContext();
  if (!profile) {
    const router = useRouter();
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
