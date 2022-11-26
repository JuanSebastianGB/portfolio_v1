import { Link } from '@/components';
import { navbarItems } from '@/utilities/navbarItems';
import React from 'react';
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <nav className="flex flex-row gap-5 ">
      {navbarItems.length > 0
        ? navbarItems.map(({ reference, label }) => (
            <Link reference={reference} label={label} />
          ))
        : null}
    </nav>
  );
};

export default Navbar;
