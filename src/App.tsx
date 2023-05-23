import Navbar from "./components/Navbar";
import { RouterProvider } from "@tanstack/router";
import setRoutes from "./client-routes";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

const router = setRoutes();
const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-mono">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
