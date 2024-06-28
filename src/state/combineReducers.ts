// src/state/index.ts
import { combineReducers } from "redux";
import { dishApi } from "../features/Menu/api/Menu";
import cartReducer from "../features/Cart/state/cartslice";

const rootReducer = combineReducers({
  cart: cartReducer,
  [dishApi.reducerPath]: dishApi.reducer,
  // Add other reducers here
});

export default rootReducer;

// Infer the `RootState` from the rootReducer
export type RootState = ReturnType<typeof rootReducer>;
