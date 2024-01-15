"use client"

import { useMemberstackModal } from "@memberstack/react";
import React from "react";

export default function PasswordSettings() {
  const { openModal } = useMemberstackModal();

  return (
    <div onClick={() => openModal({ type: "FORGOT_PASSWORD" })}>
      Forgot Password?
    </div>
  )
}