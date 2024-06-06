import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';
import authReducer from './features/authSlice';
import baseApiRoute from '@/services/baseApiRoute';
import organizationReducer from './features/organizationSlice';
import uiReducer from './features/uiSlice';
// import middleware from '@/middleware';

// configure which key we want to persist
const authPersistConfig = {
  key: "auth",
  storage: storage,
  // whitelist: ["authState"],
};

const uiPersistConfig = {
  key: "ui",
  storage: storage,
  // whitelist: ["authState"],
};
  
const rootReducer = combineReducers({
  [baseApiRoute.reducerPath]: baseApiRoute.reducer,
  auth: persistReducer(authPersistConfig, authReducer),
  organization: organizationReducer,
  ui: persistReducer(uiPersistConfig, uiReducer),
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(
        { serializableCheck: false }
      ).concat(baseApiRoute.middleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']