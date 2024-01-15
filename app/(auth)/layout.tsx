"use client";

import PageIllustration from "@/components/page-illustration";
import {
  LoggedOut,
  MemberstackProtected
} from "@memberstack/react";
import router from "next/router";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoggedOut>
      <main className="grow">
        <PageIllustration />
        {children}
      </main>
    </LoggedOut>
  );
}
