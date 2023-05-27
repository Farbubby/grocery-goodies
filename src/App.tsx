import Navbar from "./components/Navbar";
import { RouterProvider } from "@tanstack/router";
import setRoutes from "./client-routes";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
