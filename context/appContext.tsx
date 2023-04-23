'use client';

import type { Database } from '@/lib/database.types';
import { createContext, useContext, useEffect, useState } from 'react';
import { useSupabase } from './supabaseProvider';

type Profile = Database['public']['Tables']['profiles']['Row'];

type AppContextType = {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
};

const AppContext = createContext<AppContextType>({
  profile: null,
  setProfile: () => {},
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
          setProfile(profileData);
        }
      }
    };

    getProfile();
  }, [session?.user?.id, supabase]);

  return (
    <AppContext.Provider value={{ profile, setProfile }}>
      {children}
    </AppContext.Provider>
  );
}
