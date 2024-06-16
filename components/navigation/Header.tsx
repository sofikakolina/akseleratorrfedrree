import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div>
        <Link href="/" className="text-2xl font-bold">Job Portal</Link>
      </div>
      <nav>
        <Link href="/" className="mr-4">Главная</Link>
        <Link href="/jobs" className="mr-4">Все вакансии</Link>
        <Link href="/resume" className="mr-4">Резюме</Link>
      </nav>
    </header>
  );
};

export default Header;
