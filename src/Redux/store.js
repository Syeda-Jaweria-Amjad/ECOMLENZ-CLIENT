import { configureStore } from "@reduxjs/toolkit";
import {
  addSellerReducer,
  changePasswordReducer,
  editProfileReducer,
  loadCurrentUserReducer,
  loadUserAllSellersReducer,
  loadUserSavedSellersReducer,
  markAsReadAllProductsReducer,
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
    loadUserSavedSellersReducer,
    changePasswordReducer,
    editProfileReducer,
    markAsReadAllProductsReducer,
  },
});

export default store;
