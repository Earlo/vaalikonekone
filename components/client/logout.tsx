'use client';

import { Button } from '../generic/Button';
import { useSupabase } from '@/context/supabaseProvider';

export default function Logout() {
  const { logOut } = useSupabase();

  return <Button onClick={logOut}>Log out</Button>;
}
