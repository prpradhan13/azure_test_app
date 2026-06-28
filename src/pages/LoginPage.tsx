import { Form, Field, useForm, type SubmitHandler } from "@formisch/react";
import { LoginSchema } from "@/utils/form";
import InputField from "@/components/custom/InputField";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginForm = useForm({
    schema: LoginSchema,
  });

  const submitHandler: SubmitHandler<typeof LoginSchema> = async (values) => {
    try {
      // const { data } = await axios.post(
      //   `${import.meta.env.VITE_API_URL}/login`,
      //   values,
      // );

      const { data } = await axios.post(
        '/login',
        values,
      );

      if (data.success) {
       toast.success("Registration Success!")
        navigate(`/profile/${data.userId}`);
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
          disabled={loginForm.isSubmitting}
          className="w-full"
        >
          {loginForm.isSubmitting ? "Submitting..." : "Login"}
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
