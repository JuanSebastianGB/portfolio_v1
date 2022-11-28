import React from 'react';
export interface LinkInterface {
  label: string;
  reference: string;
}

const Link: React.FC<LinkInterface> = ({ label, reference }) => {
  return (
    <a className="uppercase" href={reference}>
      {label}
    </a>
  );
};

export default Link;
