import { createReducer } from "@reduxjs/toolkit";

const loadCurrentUserReducer = createReducer(
  { loading: false, user: null, error: "" },
  (builder) => {
    builder
      .addCase("LOAD_CURRENT_USER_REQUEST", (state) => {
        state.loading = true;
      })
      .addCase("LOAD_CURRENT_USER_SUCCESS", (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase("LOAD_CURRENT_USER_ERROR", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("CLEAR_ERRROS", (state) => {
        state.error = "";
        state.loading = false;
      });
  }
);

export { loadCurrentUserReducer };
