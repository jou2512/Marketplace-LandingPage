"use client";

import { useAuth, LoggedOut } from "@memberstack/react";
import PageIllustration from "components/page-illustration";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Header from "ui/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log("isLoggedIn status:", isLoggedIn);

    if (isLoggedIn) {
      console.log("Redirecting to /dashboards/main-dashboard");
      router.push("/dashboards/main-dashboard");
    }
  }, [isLoggedIn]);
  return (
    <>
      <LoggedOut>
        <Header />
        <main className="grow">
          <PageIllustration />
          {children}
        </main>
      </LoggedOut>
    </>
  );
}
