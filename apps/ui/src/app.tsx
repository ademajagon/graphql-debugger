import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ClientProvider } from "./context/client";
import { ConfigProvider } from "./context/config";
import { SchemasProvider } from "./context/schemas";
import { SideBar } from "./context/sidebar";
import { Router } from "./pages/router";

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 100_000,
        networkMode: "offlineFirst",
      },
    },
  });

  return (
    <div>
      <ConfigProvider>
        <ClientProvider>
          <QueryClientProvider client={queryClient}>
            <SchemasProvider>
              <SideBar>
                <Router />
              </SideBar>
            </SchemasProvider>
          </QueryClientProvider>
        </ClientProvider>
      </ConfigProvider>
    </div>
  );
}
