import { RootRoute, Route, Router } from "@tanstack/router";
import Home from "./pages/Home";
import Find from "./pages/Find";
import Cart from "./components/Cart";

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

  const cartRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "cart",
    component: Cart,
  });

  const routeTree = rootRoute.addChildren([homeRoute, findRoute, cartRoute]);
  const router = new Router({ routeTree });

  return router;
}

export default setRoutes;
