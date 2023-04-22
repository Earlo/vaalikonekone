import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-xl">
          Vaalikonekone
        </Link>
      </div>
      <nav className="flex items-center">
        <Link className="mx-4 hover:text-gray-500" href="/">
          Home
        </Link>
        <Link className="mx-4 hover:text-gray-500" href="/about">
          About
        </Link>
        <Link className="mx-4 hover:text-gray-500" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
