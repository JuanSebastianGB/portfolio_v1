import ahorrapp from '@/assets/ahorrapp.png';
import airbnb from '@/assets/airbnb.png';
import ecommerce from '@/assets/ecommerce.png';
import share from '@/assets/share.png';
import { motion } from 'framer-motion';
import React from 'react';
export interface PortfolioInterface {}
const Portfolio: React.FC<PortfolioInterface> = () => {
  const projects = [
    {
      title: 'share-social-media',
      url: share,
      source: 'https://github.com/JuanSebastianGB/share-social-media',
      content:
        'Full-stack Social Media Website built with React, TypeScript, Nodejs, and Express. The website includes a Login/Registration system, user profile management, post-management, and comments. The frontend follows a clean architecture approach to ensure maintainability and extensibility. The backend includes services, validations, and other functionalities for smooth operation. The entire project is deployed on third-party services: Vercel hosts the frontend, Render.com hosts the backend, MongoDB Atlas hosts the database, and Cloudinary hosts the file storage system. The application connects to a MongoDB database to provide a smooth experience. Security features such as authentication, authorization, and encryption are implemented to ensure data security. The website is user-friendly, reliable, and provides a seamless user experience.',
    },
    {
      title: 'Ahorrapp',
      url: ahorrapp,
      source: 'https://github.com/SandraCalero/AhorrApp',
      content:
        'full-stack api that implements python in backend using fastapi for swagger documentation and implements react in front-end, implementing google auth and backend auth to manage expenses',
    },
    {
      title: 'AirBnB',
      url: airbnb,
      source: 'https://github.com/manolobkno08/AirBnB_clone_v4',
      content:
        'full-stack api that implements python in backend using flask with testing and clean practices and implements html, css and javascript with python in front end to simulate an airbnb clone',
    },
    {
      title: 'Ecommerce',
      url: ecommerce,
      source: 'https://github.com/JuanSebastianGB/ecommerce',
      content:
        'front-end api that use firebase as backend to implement a simple login/register authentication view to access to an ecommerce api',
    },
  ];
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      id="portfolio"
      className="min-h-screen relative flex flex-col md:flex-row overflow-hidden text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute text-2xl top-16 uppercase tracking-[20px]">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={project.url}
              alt="project"
              className="w-96 h-auto object-cover rounded-sm"
            />
            <div className="space-y-10 px:0 md:px-10 max-w-[90%] md:max-w-5xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-custom_blue-primary">
                  {project.title}
                </span>
              </h4>
              <p className="text-lg text-center md:text-left max-w-[70VW]">
                {project.content}
              </p>
            </div>
            <div className="absolute top-[20%] right-[30%]">
              <motion.a
                href={project.source}
                target="_blank"
                className="bg-custom_blue-primary text-custom_white-primary px-5 py-2 rounded-sm font-bold cursor-pointer hover:bg-custom_blue-primary/20 hover:border-2 hover:border-custom_black-primary hover:text-custom_black-primary transition-all duration-700"
              >
                Explore
              </motion.a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute w-full top-[30%] bg-[black]/20 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Portfolio;
