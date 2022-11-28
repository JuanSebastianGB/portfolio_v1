import React from 'react';
import { CustomSocialIcon } from '../CustomSocialIcon';
export interface SocialIconsInterface {}

const SocialIcons: React.FC<SocialIconsInterface> = () => {
  return (
    <div className="flex flex-row gap-2 justify-center p-4">
      <CustomSocialIcon url="http://www.youtube.com" />
      <CustomSocialIcon url="http://www.facebook.com" />
      <CustomSocialIcon url="http://www.instagram.com" />
      <CustomSocialIcon url="http://www.twitter.com" />
      <CustomSocialIcon url="http://www.linkedin.com" />
    </div>
  );
};

export default SocialIcons;
