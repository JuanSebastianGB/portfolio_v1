import React from 'react';
import { CustomSocialIcon } from '../CustomSocialIcon';
export interface SocialIconsInterface {}

const SocialIcons: React.FC<SocialIconsInterface> = () => {
  const iconsSource = [
    'https://twitter.com/juancho1141',
    'https://github.com/JuanSebastianGB/',
    'https://www.linkedin.com/in/juansebastiangonzalezb/',
  ];
  return (
    <div className="flex flex-row gap-2 justify-center p-4">
      {iconsSource.map((icn, index) => (
        <CustomSocialIcon url={icn} key={index} />
      ))}
    </div>
  );
};

export default SocialIcons;
