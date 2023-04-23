import Login from '@/components/client/login';
import Logout from '@/components/client/logout';

import { createServerClient } from '@/utils/supabaseServer';

export default async function Page() {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session ? <Logout /> : <Login />;
}
