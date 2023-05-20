import Navbar from "./components/Navbar";
import { RouterProvider } from "@tanstack/router";
import setRoutes from "./client-routes";

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

const router = setRoutes();

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;