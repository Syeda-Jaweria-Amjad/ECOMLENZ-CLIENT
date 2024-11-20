import { configureStore } from "@reduxjs/toolkit";
import {
  addSellerReducer,
  loadCurrentUserReducer,
  loadUserAllSellersReducer,
  pauseSellerReducer,
} from "./Reducers/loadCurrentUserReducer";
import { clearErrorsAction } from "./Actions/loadCurrentUserAction";

const store = configureStore({
  reducer: {
    loadCurrentUserReducer,
    clearErrorsAction,
    loadUserAllSellersReducer,
    addSellerReducer,
    pauseSellerReducer,
  },
});

export default store;
