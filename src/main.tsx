import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RootRoute, Route, Router, RouterProvider } from "@tanstack/router";
import Home from "./components/Home";
import Find from "./components/Find";
import "./index.css";

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

const rootRoute = new RootRoute();

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const findRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "food",
  component: Find,
});

const routeTree = rootRoute.addChildren([homeRoute, findRoute]);
const router = new Router({ routeTree });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
