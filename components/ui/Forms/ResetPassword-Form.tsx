"use client";

import { useMemberstack } from "@memberstack/react";
import {
  Form,
  FormButton,
  FormRow,
  InputWithLabel,
  Description,
  Spacer,
} from "./components";
import { SetStateAction, useState } from "react";
import TokenInput from "./components/TokenInputs/TokenInput1";
import Link from "next/link";
import { useToast } from "@/components/shadcn-ui/use-toast";
import { cn } from "@/util/utils";
import { Button } from "components/shadcn-ui/button";

export const ResetPasswordForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [TokenAlready, setTokenAlready] = useState(false);
  const [tokenValues, setTokenValues] = useState(Array(6).fill(""));

  const { toast } = useToast();

  const handleTokenChange = (newTokenValues: SetStateAction<any[]>) => {
    setTokenValues(newTokenValues);
  };

  const memberstack = useMemberstack();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    console.log(formValues);

    // Check if TokenAlready is true, if yes  use the password and tokan and submit the memberstack ResetPassword

    if (TokenAlready) {
      const password = formValues["password"];
      const token = tokenValues.join("");

      // Reset Password
      const passwordValue = password.toString();

      console.log(token);

      try {
        await memberstack
          .resetMemberPassword({
            newPassword: passwordValue,
            token: token,
          })
          .then((result) => {
            if (result) {
              console.log(result);
              formElement.reset();
              setTokenValues(Array(6).fill(""));
            }
          });
      } catch (error) {
        console.log((error as Error).message);
        // Clear the form values
        formElement.reset();
        setTokenValues(Array(6).fill(""));
        setErrorMessage((error as Error).message);
      }
    } else {
      const email = formValues["email"];

      // Send Reset Email
      const emailValue = email.toString();

      try {
        await memberstack
          .sendMemberResetPasswordEmail({
            email: emailValue,
          })
          .then((result) => {
            setErrorMessage(result.data);
            formElement.reset();
          });
      } catch (error) {
        console.log((error as Error).message);
        // Clear the form values
        formElement.reset();
        setErrorMessage((error as Error).message);
      }
    }
  };

  const handleClick = () => {
    setTokenAlready(true);
    setErrorMessage("");
  };
  const handleClick2 = () => {
    setTokenAlready(false);
    setErrorMessage("");
  };

  const TokenAlreadyContent = (
    <>
      <div className="flex justify-end">
        <div
          className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out cursor-pointer"
          onClick={handleClick}
        >
          Already have a token?
        </div>
      </div>
    </>
  );

  const NoTokenContent = (
    <>
      <div className="flex justify-end">
        <div
          className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out cursor-pointer"
          onClick={handleClick2}
        >
          No token yet?
        </div>
      </div>
    </>
  );

  const PasswordInput = (
    <>
      <FormRow>
        <Spacer className="my-5" />
        <Description content={NoTokenContent} />
      </FormRow>
      <FormRow>
        <InputWithLabel
          id="password"
          label="New Password"
          placeholder="********"
          type="password"
          required
        />
      </FormRow>
      <FormRow>
        <label className="block text-gray-300 text-sm font-medium mb-3">
          6-Digit Code
          <span className="text-red-600">*</span>
        </label>
        <TokenInput
          count={6}
          values={tokenValues}
          onValueChange={handleTokenChange}
        />
      </FormRow>
      <Button
      type="button"
      variant="outline"
        onClick={() => {
        console.log("test");
        toast({
          title: "Password has been changed",
          description: "You can now login with your newly set Password",
          variant: "destructive",
        });
      }}
    >testing</Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit} method="POST">
      {TokenAlready ? (
        PasswordInput
      ) : (
        <FormRow>
          <Spacer className="my-5" />
          <Description content={TokenAlreadyContent} />
          <InputWithLabel
            id="email"
            label="Email"
            placeholder="you@yourcompany.com"
            type="email"
            required
          />
        </FormRow>
      )}
      <FormRow>
        {errorMessage && (
          <p
            className={cn(
              "text-md font-weight-bold mt-0",
              TokenAlready ? "text-red-500" : "text-green-500"
            )}
          >
            {errorMessage}
          </p>
        )}
      </FormRow>
      <FormRow>
        <FormButton buttonText="Reset Password" />
      </FormRow>
    </Form>
  );
};
