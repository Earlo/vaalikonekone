'use client';
import type { Database } from '@/lib/database.types';
import { createContext, useContext, useEffect, useState } from 'react';
import { useSupabase } from './supabaseProvider';

type Profile = Database['public']['Tables']['profiles']['Row'] & {
  email?: string;
};

type AppContextType = {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
  updateProfile: (
    updatedProfile: Partial<Profile> & { email?: string },
  ) => Promise<void>;
};

const AppContext = createContext<AppContextType>({
  profile: null,
  setProfile: () => {},
  updateProfile: async () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

type AppContextProviderProps = {
  children: React.ReactNode;
};

export function AppContextProvider({ children }: AppContextProviderProps) {
  const { session, supabase } = useSupabase();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const getProfile = async () => {
      if (session?.user?.id) {
        const { data: profileData, error } = await supabase
          .from('profiles')
          .select('id, avatar_url, full_name, username, website, updated_at')
          .eq('id', session.user.id)
          .single();
        if (error) {
          console.error(error);
        } else {
          console.log('setting profile', profileData);
          setProfile(profileData);
        }
      }
    };

    getProfile();
  }, [session?.user?.id, supabase]);

  const updateProfile = async (
    updatedProfile: Partial<Profile> & { email?: string },
  ) => {
    if (!session?.user?.id) return;

    const { email, ...profileData } = updatedProfile;

    // Update the profile
    const { data: updatedProfileData, error: profileError } = await supabase
      .from('profiles')
      .update(profileData)
      .eq('id', session.user.id);

    if (profileError) {
      console.error(profileError);
    } else {
      setProfile(updatedProfileData);
    }

    // Update the user email
    if (email) {
      const { error: emailError } = await supabase
        .from('auth.users')
        .update({ email })
        .eq('id', session.user.id);
      if (emailError) {
        console.error(emailError);
      }
    }
  };

  return (
    <AppContext.Provider value={{ profile, setProfile, updateProfile }}>
      {children}
    </AppContext.Provider>
  );
}
