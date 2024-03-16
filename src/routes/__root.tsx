import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/login" className="[&.active]:font-bold">
          Login
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
