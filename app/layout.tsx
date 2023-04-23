import './globals.css';

import Footer from '@/components/generic/footer';
import Header from '@/components/generic/header';

import { createServerClient } from '@/utils/supabaseServer';
import SupabaseListener from './supabaseListener';
import SupabaseProvider from './supabaseProvider';

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
          <Header />
          <div className="flex-grow min-h-0">
            <main className="flex flex-col justify-center items-center p-8">
              {children}
            </main>
          </div>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
