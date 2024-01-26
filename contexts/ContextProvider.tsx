"use client";

import React from "react";
import MemberstackProviderComponent from '@/contexts/MemberstackProviderContext';
import { ThemeProvider } from "@/contexts/theme-provider";

export default function ContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          >
            <MemberstackProviderComponent>
                {/* Fügen Sie weitere Provider hier hinzu */}
                {children}
            </MemberstackProviderComponent>
        </ThemeProvider>
    );
}
