import { useGlobalContext } from '@/context';
import React from 'react';
import { Menu } from '../Menu';
import { SidebarHeader } from '../SidebarHeader';
import { SocialIcons } from '../SocialIcons';

export interface SidebarInterface {}

const Sidebar: React.FC<SidebarInterface> = () => {
  const {
    globalContext: { open },
    setGlobalContext,
  } = useGlobalContext() as any;
  return (
    <div
      className={`${
        !open ? 'hidden' : ''
      } bg-[#040b14] w-[280px] min-h-screen md:flex flex-col z-50`}
    >
      <div className="sticky top-0">
        <SidebarHeader />
        <SocialIcons />
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
