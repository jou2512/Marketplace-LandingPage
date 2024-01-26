"use client";

import PageIllustration from "@/components/page-illustration";
import { LogoutForm } from "@/components/ui/Forms/Logout-Form";
import { LoggedIn, LoggedOut, MemberstackProtected } from "@memberstack/react";
import { Toaster } from "components/shadcn-ui/toaster";
import React from "react";

export default function AuthLayout({
  children,
  authpages,
  dashboard,
}: {
  children: React.ReactNode;
  authpages: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  return (
    <>
      <LoggedOut>
        <main className="grow">
          <PageIllustration />
          {authpages}
        </main>
      </LoggedOut>
      <LoggedIn>
        <MemberstackProtected>
          <main className="grow mt-12">
            <LogoutForm />
            {dashboard}
          </main>
        </MemberstackProtected>
      </LoggedIn>
      <Toaster />
    </>
  );
}
