"use client";

import {
  MemberstackProtected,
} from "@memberstack/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function DashboardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <>
      <MemberstackProtected onUnauthorized={() => router.push("/auth/signin")}>
        <main className="grow">{children}</main>
      </MemberstackProtected>
    </>
  );
}
