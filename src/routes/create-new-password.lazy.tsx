import { createLazyFileRoute } from "@tanstack/react-router";
import Button from "~/shared/components/button";
import PasswordField from "~/shared/components/password-field";

export const Route = createLazyFileRoute("/create-new-password")({
  component: CreateNewPassword,
});

function CreateNewPassword() {
  return (
    <form>
      <h1 className="text-center text-3xl font-bold">Create new Password?</h1>
      <fieldset className="mt-[30px] flex flex-col gap-[25px]">
        <div>
          <label htmlFor="new-password">Password</label>
          <PasswordField id="new-password" name="new-password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm password</label>
          <PasswordField id="confirm-password" />
        </div>
      </fieldset>

      <Button type="submit" className="mt-[30px]" variant="primary">
        Reset Password
      </Button>
    </form>
  );
}
