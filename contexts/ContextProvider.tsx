"use client";

import React from "react";
import MemberstackProviderComponent from '@/contexts/MemberstackProviderContext';
// Importieren Sie weitere Kontexte nach Bedarf

export default function ContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MemberstackProviderComponent>
            {/* Fügen Sie weitere Provider hier hinzu */}
            {children}
        </MemberstackProviderComponent>
    );
}
