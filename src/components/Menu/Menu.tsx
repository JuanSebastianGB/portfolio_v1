import React from 'react';
import { OptionMenu } from '../OptionMenu';
export interface MenuInterface {}

const Menu: React.FC<MenuInterface> = () => {
  return (
    <section className="pt-7">
      <OptionMenu variant="home" />
      <OptionMenu variant="about" />
      <OptionMenu variant="resume" />
      <OptionMenu variant="contact" />
      <OptionMenu variant="portfolio" />
    </section>
  );
};

export default Menu;
