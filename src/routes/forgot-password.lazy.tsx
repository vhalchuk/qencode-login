import { useForm } from "@tanstack/react-form";
import { createLazyFileRoute, useRouter } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import passwordReset from "~/business/api/password-reset";
import Button from "~/shared/components/button";
import FieldError from "~/shared/components/field-error";
import InputField from "~/shared/components/input-field";
import { useToast } from "~/shared/components/toast";

export const Route = createLazyFileRoute("/forgot-password")({
  component: ForgotPassword,
});

function ForgotPassword() {
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => {
      try {
        await passwordReset({
          email: value.email,
          redirect_url: `${window.origin}/create-new-password`,
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
      <h1 className="text-center text-3xl font-bold">Forgot Password?</h1>
      <form.Field
        name="email"
        validators={{
          onChange: z.string().email(),
          onChangeAsyncDebounceMs: 500,
        }}
        children={(field) => (
          <div className="flex flex-col gap-2">
            <InputField
              placeholder="Enter your email"
              type="email"
              name={field.name}
              containerClassName="mt-[30px]"
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
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button
            disabled={!canSubmit}
            type="submit"
            className="mt-[30px]"
            variant="primary"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        )}
      />
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
