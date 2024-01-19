"use client";

import {
  Form,
  FormButton,
  FormRow,
  InputWithLabel,
} from "@/components/ui/Forms/components";
import { useMemberstack } from "@memberstack/react";
import Link from "next/link";
import { useState } from "react";

const LoginContent = (
  <div className="flex justify-between">
    <label className="flex items-center">
      <input name="keep-signed-in" type="checkbox" className="form-checkbox" />
      <span className="text-gray-400 ml-2">Keep me signed in</span>
    </label>
    <Link
      href="/reset-password"
      className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
    >
      Forgot Password?
    </Link>
  </div>
);

export const SignInForm: React.FC = () => {
  const memberstack = useMemberstack();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    console.log(formValues)

    const email = formValues["email"];
    const password = formValues["password"];
    const staysingedin = formValues["keep-signed-in"];

    // Sign up the member
    const emailValue = email.toString();
    const passwordValue = password.toString();

    try {
      await memberstack
        .loginMemberEmailPassword({
          email: emailValue,
          password: passwordValue,
        })
        .then((result) => {
          console.log(result);
        });
    } catch (error) {
      console.log((error as Error).message);

      setErrorMessage((error as Error).message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <InputWithLabel
          id="email"
          label="Work Email"
          placeholder="you@yourcompany.com"
          type="email"
          required
        />
      </FormRow>
      <FormRow>
        <InputWithLabel
          id="password"
          label="Password"
          placeholder="Password (at least 10 characters)"
          type="password"
          required
        />
      </FormRow>
      <FormRow>
        {errorMessage && (
          <p className="text-red-500 text-md mt-2">{errorMessage}</p>
        )}
      </FormRow>
      <FormRow>{LoginContent}</FormRow>
      <FormRow>
        <FormButton buttonText="Sign In" />
      </FormRow>
    </Form>
  );
};
