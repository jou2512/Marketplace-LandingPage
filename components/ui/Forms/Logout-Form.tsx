"use client";

import { Form, FormButton, FormRow } from "@/components/ui/Forms/components";
import { useAuth } from "@memberstack/react";

export const LogoutForm: React.FC = () => {
  const auth = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let payload = await auth.signOut();

      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <FormButton buttonText="Logout" />
      </FormRow>
    </Form>
  );
};
