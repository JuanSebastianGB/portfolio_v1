import React from 'react';
export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  return (
    <section id="about" className="min-h-screen">
      About
    </section>
  );
};

export default About;
