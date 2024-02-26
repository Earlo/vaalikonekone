'use client';
import { Button } from '@/components/generic/Button';
import ImageUpload from '@/components/generic/ImageUpload';
import { Input } from '@/components/generic/Input';
import { useAppContext } from '@/context/appContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function ProfilePage() {
  const { profile, updateProfile } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url || '');
  const [username, setUsername] = useState(profile?.username || '');
  const [email, setEmail] = useState(profile?.email || '');
  const router = useRouter();

  useEffect(() => {
    if (!profile) {
      router.push('/login');
    }
  }, [profile, router]);

  if (!profile) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await updateProfile({ avatar_url: avatarUrl, username, email });
    setIsEditing(false);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-6xl font-bold">Profile</h1>
      {!isEditing ? (
        <div>
          <img
            src={avatarUrl}
            alt="Avatar"
            className="h-32 w-32 rounded-full"
          />
          <h2>{username}</h2>
          <p>{email}</p>
          <Button onClick={() => setIsEditing(true)} className="btn">
            Edit
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <ImageUpload
            userId={profile.id}
            currentImageUrl={avatarUrl}
            onImageUrlChange={setAvatarUrl}
            storageBucket="avatars"
            width={128}
            height={128}
          />
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <div className="flex space-x-4">
            <Button type="submit" disabled={loading}>
              Save
            </Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ProfilePage;
