import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient(
  // {
  //    defaultOptions:{
  //     queries:{
  //       retry:3,         // if queries fails, then reactQuery retry 3 more times
  //       cacheTime: 300_000, //5m // the inactive queries will remove from the catch after 5min.
  //       staleTime: 10 * 1000, //10sec.       //it specifies how long the data is considered fresh 
  //       refetchOnWindowFocus: false,
  //       refetchOnReconnect: false,
  //       refetchOnMount:false
  //     }
  //    }
  // }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
