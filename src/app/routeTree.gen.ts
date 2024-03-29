/* prettier-ignore-start */

/* eslint-disable */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// This file is auto-generated by TanStack Router
import { createFileRoute } from "@tanstack/react-router";
// Import Routes
import { Route as rootRoute } from "./../routes/__root";
import { Route as IndexImport } from "./../routes/index";

// Create Virtual Routes

const SignUpLazyImport = createFileRoute("/sign-up")();
const LoginLazyImport = createFileRoute("/login")();
const ForgotPasswordLazyImport = createFileRoute("/forgot-password")();
const CreateNewPasswordLazyImport = createFileRoute("/create-new-password")();

// Create/Update Routes

const SignUpLazyRoute = SignUpLazyImport.update({
  path: "/sign-up",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./../routes/sign-up.lazy").then((d) => d.Route));

const LoginLazyRoute = LoginLazyImport.update({
  path: "/login",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./../routes/login.lazy").then((d) => d.Route));

const ForgotPasswordLazyRoute = ForgotPasswordLazyImport.update({
  path: "/forgot-password",
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import("./../routes/forgot-password.lazy").then((d) => d.Route),
);

const CreateNewPasswordLazyRoute = CreateNewPasswordLazyImport.update({
  path: "/create-new-password",
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import("./../routes/create-new-password.lazy").then((d) => d.Route),
);

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/create-new-password": {
      preLoaderRoute: typeof CreateNewPasswordLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/forgot-password": {
      preLoaderRoute: typeof ForgotPasswordLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/login": {
      preLoaderRoute: typeof LoginLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/sign-up": {
      preLoaderRoute: typeof SignUpLazyImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  CreateNewPasswordLazyRoute,
  ForgotPasswordLazyRoute,
  LoginLazyRoute,
  SignUpLazyRoute,
]);

/* prettier-ignore-end */
