import './globals.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { AppContextProvider } from '@/context/appContext';
import SupabaseListener from '@/context/supabaseListener';
import SupabaseProvider from '@/context/supabaseProvider';

import { createServerClient } from '@/utils/supabaseServer';

export const metadata = {
  title: 'Vaalikonekone',
  description: 'Vaalikonekone on kone vaalikoneiden luontia varten.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <AppContextProvider>
            <Header />
            <main className="min-h-0 flex-grow">{children}</main>
            <Footer />
          </AppContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
