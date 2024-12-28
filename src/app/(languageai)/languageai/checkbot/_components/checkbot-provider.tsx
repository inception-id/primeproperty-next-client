"use client";
import { createContext } from "react";
import { useCompletion } from "ai/react";

type TCheckbotProvider = {
  children: React.ReactNode;
};

export const CheckbotContext = createContext<any>(null);

const CheckbotProvider = ({ children }: TCheckbotProvider) => {
  const context = useCompletion();
  return (
    <CheckbotContext.Provider value={context}>
      {children}
    </CheckbotContext.Provider>
  );
};

export default CheckbotProvider;
