const clearErrorsAction = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
const loadCurrentUserAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_CURRENT_USER_REQUEST",
    });
    const response = await fetch(
      "http://localhost:8000/auth/load-current-user",
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    dispatch({
      type: "LOAD_CURRENT_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_CURRENT_USER_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};

export { loadCurrentUserAction, clearErrorsAction };
