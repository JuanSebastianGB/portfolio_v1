import { useGlobalContext } from '@/context';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

export interface HamburgerInterface {}

const Hamburger: React.FC<HamburgerInterface> = () => {
  const {
    globalContext: { open },
    setGlobalContext,
  } = useGlobalContext() as any;
  const handleOpen = () => setGlobalContext({ open: !open });
  return (
    <div
      onClick={() => handleOpen()}
      className="fixed bg-custom_blue-secondary rounded-full w-10 h-10 flex flex-row justify-center items-center md:hidden cursor-pointer top-8 right-4 z-10"
    >
      {open ? (
        <AiOutlineClose size={20} color="white" />
      ) : (
        <GiHamburgerMenu size={20} color="white" />
      )}
    </div>
  );
};

export default Hamburger;
