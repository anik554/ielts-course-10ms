import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/index.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { LanguageContextProvider } from "./providers/LanguageProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <LanguageContextProvider>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </ThemeProvider>
    </Provider>
  </LanguageContextProvider>
);
