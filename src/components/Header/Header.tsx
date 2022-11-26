import { Navbar } from '@/components';
import React from 'react';
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <header className="sticky bg-black text-white py-5">
      <div className="flex flex-row justify-between max-w-[1000px] m-auto px-4">
        <span className="text-gray-600 border">DevJSG</span>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
