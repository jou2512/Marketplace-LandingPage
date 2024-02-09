"use client";

import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MemberstackProviderComponent from "@/contexts/MemberstackProviderContext";
import { ThemeProvider } from "@/contexts/theme-provider";
import QueryProvider from "@/contexts/QueryClientProvider";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Router>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <MemberstackProviderComponent>
        <QueryProvider>
          {/* Fügen Sie weitere Provider hier hinzu */}
          {children}
        </QueryProvider>
      </MemberstackProviderComponent>
    </ThemeProvider>
    </Router>
  );
}
