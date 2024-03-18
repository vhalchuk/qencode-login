import { createFileRoute, redirect } from "@tanstack/react-router";
import { useAuthStore } from "~/business/stores/auth";

export const Route = createFileRoute("/")({
  component: Index,
  beforeLoad: () => {
    const { accessToken } = useAuthStore.getState();
    if (!accessToken) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
