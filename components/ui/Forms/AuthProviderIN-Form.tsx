"use client";

import React from "react";
import GoogleIcon from "@/assets/googleicon.svg";
import FacebookIcon from "@/assets/facebookIcon.svg";
import {
  Form,
  FormRow,
  AuthProviderButton
} from "@/components/ui/Forms/components";

const AuthProvider = {
  google: {
    icon: (
      <GoogleIcon className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" />
    ),
    text: "Sign up with Google",
    color: "bg-red-600 hover:bg-red-800",
  },
  facebook: {
    icon: (
      <FacebookIcon className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" />
    ),
    text: "Sign up with Facebook",
    color: "bg-blue-600 hover:bg-blue-700",
  },
};

export type AuthProviders = Array<keyof typeof AuthProvider>;

interface AuthProviderFormProps {
  providers: AuthProviders;
}

const AuthProviderINForm: React.FC<AuthProviderFormProps> = ({ providers }) => {
  return (
    <Form>
      {providers.map((provider, index) => (
        <FormRow key={index}>
          <AuthProviderButton
            signin
            provider={provider}
            icon={AuthProvider[provider].icon}
            text={AuthProvider[provider].text}
            color={AuthProvider[provider].color}
          />
        </FormRow>
      ))}
    </Form>
  );
};

export default AuthProviderINForm;
