'use client';
import { useAppContext } from '@/context/appContext';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default async function ProfilePage() {
  const { profile } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!profile) {
    const router = useRouter();
    router.push('/login');
    return null;
  }
  // By default the information is just displayed, when clicking edit button, the information is editable
  // User should able to change their profile avatar (upload picture), username, and email
  /**
   * Profile Schema:
    avatar_url: string | null;
    full_name: string | null;
    id: string;
    updated_at: string | null;
    username: string | null;
    website: string | null;
   */
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Profile</h1>
    </div>
  );
}
