"use client";

import {
  Description,
  Form,
  FormButton,
  FormRow,
  InputWithLabel,
} from "@/components/ui/Forms/components";
import { useMemberstack } from "@memberstack/react";
import Link from "next/link";

const agreementContent = (
  <>
    I agree to be contacted by Open PRO about this offer as per the Open PRO{" "}
    <Link
      href="#"
      className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
    >
      Privacy Policy
    </Link>
    .
  </>
);

export const SignUpForm: React.FC = () => {
  
  const memberstack = useMemberstack();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    // Access the form values
    const fullName = formValues["full-name"];
    const companyName = formValues["company-name"];
    const email = formValues["email"];
    const password = formValues["password"];

    // Do something with the form values
    console.log("Full Name:", fullName);
    console.log("Company Name:", companyName);
    console.log("Email:", email);
    console.log("Password:", password);

    // Sign up the member
    const emailValue = email.toString();
    const passwordValue = password.toString();

    await memberstack.signupMemberEmailPassword({
      email: emailValue,
      password: passwordValue,
      plans: [
        {
          planId: "pln_tier-1-single-component-i1t40695", // Free plan only
        },
        {
          planId: "pln_single-project-access-a5t506jx", // Free plan only
        },
      ],
    });

    console.log(memberstack.getCurrentMember())
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <InputWithLabel
          id="full-name"
          label="Full Name"
          placeholder="First and last name"
          type="text"
          required
        />
      </FormRow>
      <FormRow>
        <InputWithLabel
          id="company-name"
          label="Company Name"
          placeholder="Your company or app name"
          type="text"
        />
      </FormRow>
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
      <Description content={agreementContent} />
      <FormButton buttonText="Sign up" />
    </Form>
  );
};
