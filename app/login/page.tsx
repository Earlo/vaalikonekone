import Login from '@/components/client/login';
import Logout from '@/components/client/logout';

import { createServerClient } from '@/utils/supabaseServer';

export default async function Page() {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-20 pb-20">
      <h1 className="text-4xl mb-10 text-center">Welcome to Vaalikonekone</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {session ? <Logout /> : <Login />}
      </div>
    </div>
  );
}
