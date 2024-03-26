"use client";
import { store } from "./store";
import { Provider } from "react-redux";
import { NextUIProvider, Spinner } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={
          <div className="flex h-screen items-center justify-center">
            <Spinner size="lg" />
          </div>
        }
      >
        <NextUIProvider>
          <ThemeProvider
            defaultTheme="dark"
            attribute="class"
            themes={["light", "dark", "modern"]}
          >
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}
