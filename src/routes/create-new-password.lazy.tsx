import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create-new-password")({
  component: CreateNewPassword,
});

function CreateNewPassword() {
  return <div className="p-2">Hello from /create-new-password!</div>;
}
