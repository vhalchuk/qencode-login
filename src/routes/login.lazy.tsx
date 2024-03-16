import { useForm } from "@tanstack/react-form";
import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import Button from "~/shared/components/button";
import Divider from "~/shared/components/divider";
import FieldError from "~/shared/components/field-error";
import InputField from "~/shared/components/input-field";
import PasswordField from "~/shared/components/password-field";
import GitHubLogo from "~/shared/svg-icons/github-logo.tsx";
import GoogleLogo from "~/shared/svg-icons/google-logo.tsx";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
      await new Promise((res) => setTimeout(res, 3000));
    },
    validatorAdapter: zodValidator,
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <h1 className="text-center text-3xl font-bold">Log in to your account</h1>
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
        <form.Field
          name="email"
          validators={{
            onChange: z.string().email(),
            onChangeAsyncDebounceMs: 500,
          }}
          children={(field) => (
            <div className="flex flex-col gap-2">
              <InputField
                placeholder="Work email"
                type="email"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                isError={field.state.meta.touchedErrors.some(Boolean)}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.touchedErrors ? (
                <FieldError>{field.state.meta.touchedErrors}</FieldError>
              ) : null}
            </div>
          )}
        />
        <form.Field
          name="password"
          validators={{
            onChange: z.string().min(1, "Password cannot be empty"),
            onChangeAsyncDebounceMs: 500,
          }}
          children={(field) => (
            <div className="flex flex-col gap-2">
              <PasswordField
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                isError={field.state.meta.touchedErrors.some(Boolean)}
              />
              {field.state.meta.touchedErrors ? (
                <FieldError>{field.state.meta.touchedErrors}</FieldError>
              ) : null}
            </div>
          )}
        />
      </fieldset>
      <div className="mt-[15px] text-end">
        <Link to="/forgot-password" className="font-md text-sm text-[#316FEA]">
          Forgot your password?
        </Link>
      </div>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            disabled={!canSubmit}
            className="mt-[30px]"
            variant="primary"
          >
            {isSubmitting ? "Logging in..." : "Log in to Qencode"}
          </Button>
        )}
      />
      <div className="mt-5 text-center text-sm">
        <span className="text-[#060E1E]">Is your company new to Qencode? </span>
        <Link to="/sign-up" className="text-[#316FEA]">
          Sign up
        </Link>
      </div>
    </form>
  );
}
