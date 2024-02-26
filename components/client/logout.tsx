'use client';

import { Button } from '../generic/Button';
import { useSupabase } from '@/context/supabaseProvider';

export default function Logout() {
  const { supabase } = useSupabase();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log({ error });
    }
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
