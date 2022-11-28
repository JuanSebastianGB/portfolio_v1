import { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface initialStateInterface {
  open: boolean;
}

const initialState = {
  open: false,
};

const GlobalContext = createContext({});
export const GlobalProvider = ({ children }: Props) => {
  const [globalContext, setGlobalContext] =
    useState<initialStateInterface>(initialState);

  return (
    <GlobalContext.Provider value={{ globalContext, setGlobalContext }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error(`Context is out of ${GlobalProvider.name}`);
  return context;
};
