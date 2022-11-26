import React from 'react';
export interface LinkInterface {
  label: string;
  reference: string;
}

const Link: React.FC<LinkInterface> = ({ label, reference }) => {
  return (
    <a
      className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700"
      // className="uppercase text-base relative before:content-[''] block before:absolute before:w-full before:h-1 before:top-0 before:left-0"
      href={reference}
    >
      {label}
    </a>
  );
};

export default Link;
