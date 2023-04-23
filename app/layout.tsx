import './globals.css';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import { AppContextProvider } from '@/context/appContext';
import SupabaseListener from '@/context/supabaseListener';
import SupabaseProvider from '@/context/supabaseProvider';

import { createServerClient } from '@/utils/supabaseServer';

// do not cache this layout
export const revalidate = 0;

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
      <body className="flex flex-col min-h-screen">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <AppContextProvider>
            <Header />
            <div className="flex-grow min-h-0">
              <main className="flex flex-col justify-center items-center p-8">
                {children}
              </main>
            </div>
            <Footer />
          </AppContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
