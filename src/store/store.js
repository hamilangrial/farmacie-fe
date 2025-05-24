import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "@/store/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [], // Exclude these slices from being persisted
  whitelist: ["auth"],
  debug: false,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export const persistor = persistStore(store);
