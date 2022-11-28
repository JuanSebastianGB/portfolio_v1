import React from 'react';
export interface SidebarHeaderInterface {}

const SidebarHeader: React.FC<SidebarHeaderInterface> = () => {
  return (
    <>
      <div className="py-4">
        <img
          className="rounded-full w-28 border-custom_black-secondary border-8 m-auto"
          src="https://avatars.githubusercontent.com/u/85469830?v=4"
          alt="myself"
        />
      </div>
      <h3 className="text-custom_white-primary text-2xl text-center">
        Juan Sebastian Gonzalez
      </h3>
    </>
  );
};

export default SidebarHeader;
