"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <NextThemesProvider attribute="class" enableSystem>
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;