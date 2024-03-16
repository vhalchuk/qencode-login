import { Link, createLazyFileRoute } from "@tanstack/react-router";
import Button from "~/shared/components/button";
import Divider from "~/shared/components/divider";
import InputField from "~/shared/components/input-field";
import PasswordField from "~/shared/components/password-field";
import GitHubLogo from "~/shared/svg-icons/github-logo.tsx";
import GoogleLogo from "~/shared/svg-icons/google-logo.tsx";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <form>
      <h1 className="text-center text-3xl">Log in to your account</h1>
      <div className="mt-10 flex justify-between gap-4">
        <Button type="button" variant="secondary">
          <GoogleLogo />
          <span>Google</span>
        </Button>
        <Button type="button" variant="secondary">
          <GitHubLogo />
          <span>Github</span>
        </Button>
      </div>
      <Divider className="mt-[30px]" />
      <fieldset className="mt-[30px] flex flex-col gap-[25px]">
        <InputField placeholder="Email" type="email" name="email" required />
        <PasswordField />
      </fieldset>
      <div className="mt-[15px] text-end">
        <Link to="/forgot-password" className="font-md text-sm text-[#316FEA]">
          Forgot your password?
        </Link>
      </div>
      <Button type="submit" className="mt-[30px]" variant="primary">
        Log in to Qencode
      </Button>
      <div className="mt-5 text-center text-sm">
        <span className="text-[#060E1E]">Is your company new to Qencode? </span>
        <Link to="/sign-up" className="text-[#316FEA]">
          Sign up
        </Link>
      </div>
    </form>
  );
}
