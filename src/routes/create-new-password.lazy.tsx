import { useForm } from "@tanstack/react-form";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import passwordSet from "~/business/api/password-set";
import Alert from "~/shared/components/alert";
import Button from "~/shared/components/button";
import FieldError from "~/shared/components/field-error";
import PasswordField from "~/shared/components/password-field";
import { useToast } from "~/shared/components/toast";

const searchSchema = z.object({
  token: z.string().min(1),
  secret: z.string().min(1),
});

export const Route = createLazyFileRoute("/create-new-password")({
  component: CreateNewPassword,
  errorComponent: () => (
    <Alert>Access denied. Please open this page via email</Alert>
  ),
});

function CreateNewPassword() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { token, secret } = searchSchema.parse(search);

  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ value }) => {
      const { password, confirmPassword } = value;

      try {
        await passwordSet({
          password,
          password_confirm: confirmPassword,
          token,
          secret,
        });
        await navigate({
          to: "/",
        });
      } catch {
        toast({
          description: "An error occurred, please try again later",
        });
      }
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
      <h1 className="text-center text-3xl font-bold">Create new Password?</h1>
      <fieldset className="mt-[30px] flex flex-col gap-[25px]">
        <form.Field
          name="password"
          validators={{
            onChange: z
              .string()
              .min(8, "Password must be at least 8 characters long"),
            onChangeAsyncDebounceMs: 500,
          }}
          children={(field) => (
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <PasswordField
                id="password"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                isError={field.state.meta.touchedErrors.some(Boolean)}
                autoComplete="new-password"
              />
              {field.state.meta.touchedErrors ? (
                <FieldError>{field.state.meta.touchedErrors}</FieldError>
              ) : null}
            </div>
          )}
        />
        <form.Subscribe
          selector={(state) => state.values.password}
          children={(password) => (
            <form.Field
              name="confirmPassword"
              validators={{
                onChange: z.string().superRefine((val, ctx) => {
                  if (val !== password) {
                    ctx.addIssue({
                      code: z.ZodIssueCode.custom,
                      message: "Passwords must match",
                    });
                  }
                }),
                onChangeAsyncDebounceMs: 500,
              }}
              children={(field) => (
                <div className="flex flex-col gap-2">
                  <label htmlFor="confirm-password">Confirm password</label>
                  <PasswordField
                    id="confirm-password"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    isError={field.state.meta.touchedErrors.some(Boolean)}
                    autoComplete="off"
                  />
                  {field.state.meta.touchedErrors ? (
                    <FieldError>{field.state.meta.touchedErrors}</FieldError>
                  ) : null}
                </div>
              )}
            />
          )}
        />
      </fieldset>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button
            disabled={!canSubmit}
            type="submit"
            className="mt-[30px]"
            variant="primary"
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </Button>
        )}
      />
    </form>
  );
}
