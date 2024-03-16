import { createLazyFileRoute, useRouter } from "@tanstack/react-router";
import Button from "~/shared/components/button";
import InputField from "~/shared/components/input-field";

export const Route = createLazyFileRoute("/forgot-password")({
  component: ForgotPassword,
});

function ForgotPassword() {
  const router = useRouter();

  return (
    <form>
      <h1 className="text-center text-3xl font-bold">Forgot Password?</h1>
      <InputField
        placeholder="Enter your email"
        type="email"
        name="email"
        required
        containerClassName="mt-[30px]"
      />
      <Button type="submit" className="mt-[30px]" variant="primary">
        Send
      </Button>
      <Button
        type="submit"
        className="mt-5"
        variant="secondary"
        onClick={router.history.back}
      >
        Cancel
      </Button>
    </form>
  );
}
