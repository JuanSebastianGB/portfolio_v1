import React from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
export interface ResumeInterface {}

const Resume: React.FC<ResumeInterface> = () => {
  const props = {
    allowFullScreen: true,
    src: 'src/assets/cv.pdf',
  };

  return (
    <a href="src/assets/cv.pdf" target="_blank">
      <section
        id="resume"
        className=" cursor-pointer min-h-screen flex flex-col justify-center items-center text-5xl"
      >
        <div className="flex gap-2 flex-row items-center justify-center">
          Resume
          <AiOutlineCloudDownload size={60} />
        </div>
      </section>
    </a>
  );
};

export default Resume;
