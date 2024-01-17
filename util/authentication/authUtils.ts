"use client"
import { useMemberstack } from "@memberstack/react";




export async function signupMember(email: string, password: string) {
  const memberstack = useMemberstack()
    
  if (!memberstack) {
    throw new Error('You use this Function out of the Memberstack Context Provider');
  }

  let signupResult = await memberstack.signupMemberEmailPassword({
    email: email,
    password: password,
    plans: [
      {
        planId: "pln_tier-1-single-component-i1t40695" // Free plan only
        },
        {
        planId: "pln_single-project-access-a5t506jx" // Free plan only
      }
    ]
  });

  return signupResult;
}