import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 flex flex-col justify-between items-center p-8">
      <header className="mt-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 dark:text-gray-200">
          Vaalikonekone
        </h1>
        <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 max-w-md">
          Welcome to Vaalikonekone, an online voting platform that helps you
          make informed decisions about the candidates in the upcoming election.
        </p>
      </header>
      <section className="mt-12 flex justify-center items-center">
        <Image
          src="/vaalikonekone.png"
          alt="Vaalikonekone"
          width={640}
          height={426}
        />
      </section>
      <section className="mt-12 flex justify-center items-center">
        <Link
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out shadow-lg"
        >
          Get Started
        </Link>
      </section>
      <footer className="mt-12 mb-8 flex justify-center items-center text-gray-600 dark:text-gray-400 text-sm">
        <p>
          Made with ❤️ by{' '}
          <Link
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Your Name
          </Link>
        </p>
      </footer>
    </main>
  );
}
