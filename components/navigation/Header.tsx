// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl">Job Search</div>
        <button className="bg-green-500 px-4 py-2 rounded">Login</button>
      </div>
    </header>
  );
};

export default Header;
