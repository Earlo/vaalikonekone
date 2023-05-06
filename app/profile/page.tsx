'use client';
import ImageUpload from '@/components/generic/imageUpload';
import { useAppContext } from '@/context/appContext';
import { useSupabase } from '@/context/supabaseProvider';
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
  const { supabase } = useSupabase();

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

    let uploadedAvatarUrl = avatarUrl;

    if (avatarUrl !== profile.avatar_url) {
      const fileName = `${profile.id}-${Date.now()}.${avatarUrl
        .split('.')
        .pop()}`;
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, avatarUrl);

      if (uploadError) {
        console.error('Avatar upload failed:', uploadError);
        setLoading(false);
        return;
      }
      uploadedAvatarUrl = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName).data.publicUrl;
    }

    await updateProfile({ avatar_url: uploadedAvatarUrl, username, email });
    setIsEditing(false);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Profile</h1>
      {!isEditing ? (
        <div>
          <img
            src={avatarUrl}
            alt="Avatar"
            className="rounded-full w-32 h-32"
          />
          <h2>{username}</h2>
          <p>{email}</p>
          <button onClick={() => setIsEditing(true)} className="btn">
            Edit
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <ImageUpload
            supabase={supabase}
            userId={profile.id}
            currentImageUrl={avatarUrl}
            onImageUrlChange={setAvatarUrl}
            storageBucket="avatars"
            width={128}
            height={128}
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <div className="flex space-x-4">
            <button type="submit" className="btn" disabled={loading}>
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="btn">
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ProfilePage;
