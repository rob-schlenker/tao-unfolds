import React from 'react';
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="p-4 text-sage flex justify-between items-center w-full">
      <Link href="/">Tao Unfolds</Link>
      <Link href="/archive">Archive</Link>
    </header>
  );
};

export default Header;