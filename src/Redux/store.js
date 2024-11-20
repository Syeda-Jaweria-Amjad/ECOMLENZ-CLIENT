import { configureStore } from "@reduxjs/toolkit";
import { loadCurrentUserReducer } from "./Reducers/loadCurrentUserReducer";
import { clearErrorsAction } from "./Actions/loadCurrentUserAction";

const store = configureStore({
  reducer: {
    loadCurrentUserReducer,
    clearErrorsAction,
  },
});

export default store;
