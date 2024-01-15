"use client";

import React from "react";
import { MemberstackProvider, MemberstackProtected } from "@memberstack/react";
// Importieren Sie weitere Kontexte nach Bedarf
const MemberstackConfig = {
  publicKey: "pk_0a375c2e6f3ec1940676",
};

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MemberstackProvider config={MemberstackConfig}>
      {/* Fügen Sie weitere Provider hier hinzu */}
      {children as React.ReactElement | React.ReactElement[]}
    </MemberstackProvider>
  );
}
