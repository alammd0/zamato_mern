import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/userAuthSlice";
import { FoodPartnerSlice } from "./slice/foodPartnerSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer= combineReducers({
  auth: authSlice.reducer,
  foodPartner: FoodPartnerSlice.reducer
})

const persistConfig = {
  key : "root",
  storage,
  whitelist : ["auth", "foodPartner"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer : persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;