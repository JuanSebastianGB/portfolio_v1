import React from 'react';
import { OptionMenu } from '../OptionMenu';
export interface MenuInterface {}

const Menu: React.FC<MenuInterface> = () => {
  return (
    <section className="pt-7">
      <OptionMenu variant="home" />
      <OptionMenu variant="about" />
      <OptionMenu variant="portfolio" />
      <OptionMenu variant="contact" />
    </section>
  );
};

export default Menu;
