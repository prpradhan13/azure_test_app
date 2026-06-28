import { RegisterSchema } from "@/utils/form";
import axios from "axios";
import { Form, Field, useForm, type SubmitHandler } from "@formisch/react";
import { Button } from "@/components/ui/button";
import InputField from "@/components/custom/InputField";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const registerForm = useForm({
    schema: RegisterSchema,
  });

  const submitHandler: SubmitHandler<typeof RegisterSchema> = async (
    values,
  ) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        values,
      );

      if (data.success) {
       toast.success("Registration Success!")
        navigate('/login');
      } else {
        toast.error("Registration Failed!")
      }

    } catch (error: unknown) {
      console.log(
        "Error: ",
        error instanceof Error ? error.message : String(error),
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424]">
      <Form
        of={registerForm}
        onSubmit={submitHandler}
        className="bg-taupe-300 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <Field of={registerForm} path={["name"]}>
          {(field) => (
            <InputField
              {...field.props}
              type="text"
              label="Name"
              input={field.input}
              errors={field.errors}
              required
            />
          )}
        </Field>
        <Field of={registerForm} path={["email"]}>
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
        <Field of={registerForm} path={["password"]}>
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
          disabled={registerForm.isSubmitting}
          className="w-full"
        >
          {registerForm.isSubmitting ? "Submitting..." : "Register"}
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
