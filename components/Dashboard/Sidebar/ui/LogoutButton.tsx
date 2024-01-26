"use client";

import { useAuth } from "@memberstack/react";
import { ImExit } from "react-icons/im";
import { Button } from "shadcn-ui/button";

// Definieren Sie eine Client-Komponente
export default function LogoutButton() {
  const auth = useAuth();

  const handleClick = async () => {
    try {
      let payload = await auth.signOut();
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-1 p-2">
      <Button
        key="LogoutButtonx"
        variant="secondary"
        className="w-full justify-start"
        onClick={handleClick}
      >
        <div className="pr-2">
          <ImExit />
        </div>
        <div className="pl-2">Logout</div>
      </Button>
    </div>
  );
}
