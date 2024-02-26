import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mb-8 mt-12 flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
      <nav className="flex">
        <Link href="/about" className="mx-4 hover:text-gray-500">
          About
        </Link>
        <Link href="/contact" className="mx-4 hover:text-gray-500">
          Contact
        </Link>
      </nav>
      <p className="mx-4">
        Made by{' '}
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
