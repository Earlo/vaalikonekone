import Login from '@/components/client/login';
import Logout from '@/components/client/logout';

import { createServerClient } from '@/utils/supabaseServer';

export default async function Page() {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center pb-20 pt-20">
      <h1 className="mb-10 text-center text-4xl">Welcome to Vaalikonekone</h1>
      <div className="mb-4 w-full max-w-md rounded bg-white px-8 pb-8 pt-6 shadow-md">
        {session ? <Logout /> : <Login />}
      </div>
    </div>
  );
}
