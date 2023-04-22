import Head from 'next/head';
import Footer from '../components/generic/footer';
import Header from '../components/generic/header';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Vaalikonekone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 flex flex-col justify-between items-center p-8">
        {/* Content of the page goes here */}
      </main>

      <Footer />
    </div>
  );
}
