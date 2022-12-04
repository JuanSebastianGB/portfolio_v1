import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [text, count] = useTypewriter({
    words: [
      'frontend developer',
      'backend developer',
      'devops developer',
      'full stack Developer :P',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative">
      <div className="opacity-90">
        <div className="min-h-screen bg-heroImage bg-fixed bg-no-repeat bg-cover bg-center"></div>
      </div>
      <div className="absolute top-0 left-0 flex flex-row h-full w-full justify-start items-center text-custom_white-primary ml-20">
        <section>
          <h3 className=" text-6xl mb-6 w-[70vw] text-center">
            Juan Sebastian Gonzalez
          </h3>
          <span className="text-2xl">Hi, I'm </span>
          <span className="text-2xl underline">
            {text}
            <Cursor cursorColor="#d8eb32" />
          </span>
        </section>
      </div>
    </div>
  );
};

export default Home;
