import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { authReducer } from "./slices/authSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export const useCustomDispatch: () => AppDispatch = () => dispatchHook();
export const useCustomSelector: TypedUseSelectorHook<RootState> = selectorHook;
