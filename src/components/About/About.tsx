import { motion } from 'framer-motion';
import React from 'react';

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  const paragraphs = [
    'Hello! My name is Juan Sebastián and I am a Colombian full-stack developer; I have a diverse set of skills, ranging from design with HTML + CSS +    Javascript I mainly use React as a javascript front-end library and node js as backend development, but I am comfortable using flask and    fast-API with python, and in general, different technologies such as   Flutter (dart), C, PHP, etc.',
    'I am in love with the tech world and my biggest goal is to  learn as much as possible, developing high-quality code, optimizing process, and most  importantly, teach others what I know. The future is now and there are  too many things have to be done yet.',
    "There are other fields of my interest, related to artificial intelligence and machine learning.I'm really excited to get to the point where I can bring together the knowledge I've gained throughout my professional life as an engineer and as a developer.",
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-[200px] md:pt-20"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-2xl">
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
      <div className="space-y-10 px-0 py-20 md:px-10">
        <h4 className="text-4xl underline decoration-custom_blue-primary">
          A little background
        </h4>
        {paragraphs.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
