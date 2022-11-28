import { motion } from 'framer-motion';
import React from 'react';
import { CardProject } from './CardProject';
export interface PortfolioInterface {}
const Portfolio: React.FC<PortfolioInterface> = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      id="portfolio"
      className=""
    >
      <section className="grid  xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 p-6">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </section>
    </motion.div>
  );
};

export default Portfolio;
