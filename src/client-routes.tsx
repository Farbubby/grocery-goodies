import { RootRoute, Route, Router } from "@tanstack/router";
import Home from "./components/Home";
import Find from "./components/Find";

function setRoutes() {
  const rootRoute = new RootRoute();

  const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
  });

  const findRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "find",
    component: Find,
  });

  const routeTree = rootRoute.addChildren([homeRoute, findRoute]);
  const router = new Router({ routeTree });

  return router;
}

export default setRoutes;
