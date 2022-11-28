import { useGlobalContext } from '@/context';
import React, { useState } from 'react';
import { AiOutlineFileText, AiOutlineMail } from 'react-icons/ai';
import { FaHouseUser, FaUser } from 'react-icons/fa';
import { GoServer } from 'react-icons/go';

export interface OptionMenuInterface {
  variant: 'about' | 'home' | 'resume' | 'contact' | 'portfolio';
}

const OptionMenu: React.FC<OptionMenuInterface> = ({ variant }) => {
  const [hover, setHover] = useState(false);
  const handleEnter = () => setHover(true);
  const handleLeave = () => setHover(false);

  const { globalContext, setGlobalContext } = useGlobalContext() as any;
  const handleClick = () => setGlobalContext({ open: false });
  return (
    <a
      href={`#${variant}`}
      className="pl-6 pb-7 flex flex-row items-center gap-2 text-custom_gray-primary hover:text-custom_white-primary"
      onMouseEnter={() => handleEnter()}
      onMouseLeave={() => handleLeave()}
      onClick={() => handleClick()}
    >
      {variant === 'about' && (
        <>
          <FaUser color={hover ? '#149ddd' : ''} size={20} />
          About
        </>
      )}
      {variant === 'home' && (
        <>
          <FaHouseUser color={hover ? '#149ddd' : ''} size={20} />
          Home
        </>
      )}
      {variant === 'contact' && (
        <>
          <AiOutlineMail color={hover ? '#149ddd' : ''} size={20} />
          Contact
        </>
      )}
      {variant === 'portfolio' && (
        <>
          <GoServer color={hover ? '#149ddd' : ''} size={20} />
          Projects
        </>
      )}
      {variant === 'resume' && (
        <>
          <AiOutlineFileText color={hover ? '#149ddd' : ''} size={20} />
          Resume
        </>
      )}
    </a>
  );
};

export default OptionMenu;
