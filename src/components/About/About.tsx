import { motion } from 'framer-motion';
import React from 'react';

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  const paragraphs = [
    `Greetings! My name is Juan Sebastián, and I'm a seasoned full-stack developer from Colombia with a focus on React and HTML, CSS, and Javascript. With over 2 years of practical experience in developing web applications, I possess a solid understanding of front-end technologies and am proficient in back-end development using both JavaScript and Python. Furthermore, I have extensive experience working with both relational and non-relational databases and am skilled in consuming data through APIs. I'm well-versed in using Github and have experience with CI/CD approaches.

    Before diving into software development, I worked as a biomedical engineer for over 4 years. This experience has taught me critical thinking and attention to detail, which I apply to my work as a developer. I take pride in creating clean, efficient, and user-friendly applications that meet the needs of clients and end-users.

    Apart from React, I'm also interested in the fields of artificial intelligence and machine learning. My long-term goal is to bring together my engineering and development knowledge to develop solutions that benefit society.

    I'm always eager to learn and grow, and I take every opportunity to enhance my skills. I'm excited about the future of tech, and I'm committed to developing high-quality code, optimizing processes, `,
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
        {paragraphs.map((paragraph, index) => (
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
