'use client';

import { useSupabase } from '@/context/supabaseProvider';
import Button from '../generic/Button';

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
