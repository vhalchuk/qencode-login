import { createLazyFileRoute } from "@tanstack/react-router";
import Alert from "~/shared/components/alert";

export const Route = createLazyFileRoute("/sign-up")({
  component: () => <Alert>Not implemented</Alert>,
});
