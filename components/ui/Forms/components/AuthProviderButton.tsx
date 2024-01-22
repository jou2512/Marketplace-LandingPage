import { cn } from "@/util/utils";
import { useMemberstack } from "@memberstack/react";
import React from "react";

type AuthProviderButtonProps = {
  icon: React.ReactNode;
  text: string;
  color: string;
  provider: string;
  signin?: boolean;
};

const AuthProviderButton: React.FC<AuthProviderButtonProps> = ({
  icon,
  text,
  color,
  provider,
  signin = false,
}) => {
  const memberstack = useMemberstack();

  async function SignUp() {
    console.log(`${provider} button clicked`);
    try {
      let signupResult = await memberstack.signupWithProvider({
        provider: provider,
        plans: [
          {
            planId: "pln_tier-1-single-component-i1t40695", // Free plan only
          },
          {
            planId: "pln_single-project-access-a5t506jx", // Free plan only
          },
        ],
      });
    } catch (error) {
      // handle error here
      console.log(error);
    }
  }
  async function SignIn() {
    console.log(`${provider} button clicked`);
    try {
      let signupResult = await memberstack.loginWithProvider({
        provider: provider,
      });
    } catch (error) {
      // handle error here
      console.log(error);
    }
  }

  return (
    <button
      type="button"
      className={cn(
        "btn px-0 text-white w-full relative flex items-center",
        color
      )}
      onClick={signin ? SignIn : SignUp}
    >
      {icon}
      <span
        className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
        aria-hidden="true"
      ></span>
      <span className="flex-auto pl-16 pr-8 -ml-16 text-md">{text}</span>
    </button>
  );
};

export default AuthProviderButton;
