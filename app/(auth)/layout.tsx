"use client";

import PageIllustration from "@/components/page-illustration";
import { LogoutForm } from "@/components/ui/Forms/Logout-Form";
import { LoggedIn, LoggedOut, MemberstackProtected } from "@memberstack/react";
import { Toaster } from "components/shadcn-ui/sonner";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoggedOut>
        <main className="grow">
          <PageIllustration />
          {children}
        </main>
      </LoggedOut>
      <LoggedIn>
        <MemberstackProtected>
          <main className="grow mt-12">
            <LogoutForm />
          </main>
        </MemberstackProtected>
      </LoggedIn>
      <Toaster />
    </>
  );
}
