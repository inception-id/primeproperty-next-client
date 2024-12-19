"use client";

import { ThemeProvider } from "next-themes";

type TProviders = {
  children: React.ReactNode;
};

const Providers = ({ children }: TProviders) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
