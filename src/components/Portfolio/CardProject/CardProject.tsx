import React, { useState } from 'react';
export interface CardProjectInterface {}

const CardProject: React.FC<CardProjectInterface> = () => {
  const [hover, setHover] = useState(false);
  const handleEnter = () => setHover(true);
  const handleLeave = () => setHover(false);
  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="w-full h-full relative cursor-pointer"
    >
      <img
        src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="project"
        className="bg-cover w-auto h-auto"
      />
      <div
        className={`absolute bottom-0 left-0 w-full bg-custom_blue-secondary h-10 ${
          hover ? 'opacity-1' : 'opacity-0'
        } transition ease-in-out duration-1000`}
      >
        Temporal
      </div>
    </div>
  );
};

export default CardProject;
