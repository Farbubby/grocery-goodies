import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "@tanstack/router";
import "./index.css";
import setRoutes from "./client-routes";

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

const router = setRoutes();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
