import { Form, Field, useForm } from "@formisch/react";
import { LoginSchema } from "@/utils/form";
import InputField from "@/components/custom/InputField";
import type { SubmitHandler } from "@formisch/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LoginPage = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);

  const loginForm = useForm({
    schema: LoginSchema,
  });

  const submitHandler: SubmitHandler<typeof LoginSchema> = (values) => {
    setFormSubmitting(true);

    setTimeout(() => {
      setFormSubmitting(loginForm.isSubmitting)
      console.log("Form submitted with values:", values);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424]">
      <Form
        of={loginForm}
        onSubmit={submitHandler}
        className="bg-taupe-300 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <Field of={loginForm} path={["email"]}>
          {(field) => (
            <InputField
              {...field.props}
              type="email"
              label="Email"
              input={field.input}
              errors={field.errors}
              required
            />
          )}
        </Field>
        <Field of={loginForm} path={["password"]}>
          {(field) => (
            <InputField
              {...field.props}
              type="password"
              label="Password"
              input={field.input}
              errors={field.errors}
              required
            />
          )}
        </Field>

        <Button
          type="submit"
          disabled={formSubmitting}
          className="w-full"
        >
          {formSubmitting ? "Submitting..." : "Login"}
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
