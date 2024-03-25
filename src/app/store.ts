import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer,   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import userReducer from "./features/user/user-slice";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

export function createPersistStore() {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}
const storage = typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();


const persistConfig  = {
  key: "root",
  storage,
  whitelist: ["user"],
  timeout: 1000
};

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
