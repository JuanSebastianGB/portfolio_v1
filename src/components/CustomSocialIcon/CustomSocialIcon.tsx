import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
export interface CustomSocialIconInterface {
  url: string;
}

const CustomSocialIcon: React.FC<CustomSocialIconInterface> = ({ url }) => {
  const [hover, setHover] = useState(false);
  const handleEnter = () => setHover(true);
  const handleLeave = () => setHover(false);

  return (
    <SocialIcon
      url={url}
      fgColor="white"
      bgColor={hover ? '#149ddd' : '#2c2f3f'}
      style={{ width: '35px', height: '35px' }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    />
  );
};

export default CustomSocialIcon;
