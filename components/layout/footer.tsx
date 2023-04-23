import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 mb-8 flex justify-center items-center text-gray-600 dark:text-gray-400 text-sm">
      <nav className="flex">
        <Link href="/about" className="mx-4 hover:text-gray-500">
          About
        </Link>
        <Link href="/contact" className="mx-4 hover:text-gray-500">
          Contact
        </Link>
      </nav>
      <p className="mx-4">
        Made with ❤️ by{' '}
        <Link
          href="https://www.visapollari.fi"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Visa Pollari
        </Link>
      </p>
    </footer>
  );
}
