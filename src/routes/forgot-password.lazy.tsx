import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/forgot-password")({
  component: ForgotPassword,
});

function ForgotPassword() {
  return <div className="p-2">Hello from /forgot-password!</div>;
}
