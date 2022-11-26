import React, { ReactNode } from 'react';
export interface ContainerInterface {
  children: ReactNode;
  className: string;
}

const Container: React.FC<ContainerInterface> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Container;
