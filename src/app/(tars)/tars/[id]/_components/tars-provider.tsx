"use client";
import { createContext } from "react";
import { useChat } from "ai/react";

type TarsProviderProps = {
  children: React.ReactNode;
};

export const TarsContext = createContext<any>(null);

const TarsProvider = ({ children }: TarsProviderProps) => {
  const context = useChat({});
  return (
    <TarsContext.Provider value={context}>{children}</TarsContext.Provider>
  );
};

export default TarsProvider;
