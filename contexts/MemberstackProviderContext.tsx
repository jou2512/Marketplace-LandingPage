import React from "react";
import { MemberstackProvider } from "@memberstack/react";

const MemberstackConfig = {
  publicKey: "pk_sb_e76d77c7e943895641a0",
};

export default function MemberstackProviderComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <MemberstackProvider config={MemberstackConfig}>
            {children as React.ReactElement | React.ReactElement[]}
        </MemberstackProvider>
    );
}