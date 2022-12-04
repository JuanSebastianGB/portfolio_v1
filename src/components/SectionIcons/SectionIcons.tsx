import React from 'react';
import { OptionMenu } from '../OptionMenu';
import { SocialIcons } from '../SocialIcons';
export interface SectionIconsInterface {}

const SectionIcons: React.FC<SectionIconsInterface> = () => {
  return (
    <div className="fixed bg-custom_black-primary/0 text-custom_white-primary top-1 left-0 w-[95%] mx-auto z-40">
      <div className="flex w-full mt-[200px] justify-between">
        <div>
          <OptionMenu variant="home" />
          <OptionMenu variant="about" />
          <OptionMenu variant="portfolio" />
          <OptionMenu variant="contact" />
        </div>
        <div className="text-center">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default SectionIcons;
