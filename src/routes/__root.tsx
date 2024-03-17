import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "~/shared/components/toast/toaster.tsx";
import QencodeLogo from "~/shared/svg-icons/qencode-logo.tsx";

export const Route = createRootRoute({
  component: () => (
    <main className="flex h-screen items-center justify-center p-4">
      <div className="m-4 flex w-full max-w-[400px] flex-col gap-y-20">
        <QencodeLogo className="self-center" />
        <Outlet />
        <Toaster />
      </div>
    </main>
  ),
});
