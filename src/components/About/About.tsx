import { motion } from 'framer-motion';
import React from 'react';

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="about"
      className="min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        src="https://avatars.githubusercontent.com/u/85469830?v=4"
        alt=""
        className="-mb-20 md:mb-20 flex-shrink h-56 w-56 rounded-full object-cover md:rounded-lg md:w-56 md:h-96 xl:w-[300px] xl:h-[500px] md:pt-20"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl">About me</h4>
        <p className="text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos est sed
          dolor aliquid soluta aliquam alias amet blanditiis similique at
          consequatur, suscipit non. Velit impedit asperiores consequatur fuga
          praesentium? Quaerat similique, obcaecati assumenda fuga maxime fugiat
          et beatae autem? Eum quia est aperiam nemo, culpa quas reiciendis
          voluptas tempora et?
        </p>
      </div>
    </motion.section>
  );
};

export default About;
