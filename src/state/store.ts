// src/state/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dishApi } from "../features/Menu/api/Menu";
import rootReducer from "./combineReducers";
import apiErrorLogger from "./apiErrorLogger";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dishApi.middleware, apiErrorLogger),
});

setupListeners(store.dispatch);


export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
