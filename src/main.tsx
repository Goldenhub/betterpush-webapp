import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import QueryProvider from "./lib/QueryClientProvider.tsx";
import { Toaster } from "sonner";
import { AppProvider } from "./lib/AppProvider.tsx";
import { ScrollToTop } from "./lib/utils.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <Toaster position="top-right" />
      <BrowserRouter>
        <AppProvider>
          <ScrollToTop />
          <App />
        </AppProvider>
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>
);
