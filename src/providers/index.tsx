"use client";
import React from "react";
import dynamic from "next/dynamic";

const ThemeProvider = dynamic(() => import("@/providers/themeProvider"), { ssr: false });
import { NextUIProvider } from "@nextui-org/react";


const ThemeClient = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ThemeProvider>
  );
};

export default ThemeClient;
