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
const loadUserAllSellersAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_ALL_SELLERS_REQUEST",
    });
    const response = await fetch(
      "http://localhost:8000/auth/load-user-all-sellers",
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    dispatch({
      type: "LOAD_USER_ALL_SELLERS_SUCCESS",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_ALL_SELLERS_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};

const addSellerAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_SELLER_REQUEST",
    });
    const response = await fetch(
      `http://localhost:8000/auth/api/seller/${id}`,
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    dispatch({
      type: "ADD_SELLER_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_SELLER_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};
const pauseSellerAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "PAUSE_SELLER_REQUEST",
    });
    const response = await fetch(
      `http://localhost:8000/auth/pause-seller/${id}`,
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    dispatch({
      type: "PAUSE_SELLER_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "PAUSE_SELLER_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};
const loadUserSavedSellersAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_SAVED_SELLERS_REQUEST",
    });
    const response = await fetch(
      "http://localhost:8000/auth/load-user-saved-sellers",
      {
        credentials: "include",
      }
    );
    const data = await response.json();

    dispatch({
      type: "LOAD_USER_SAVED_SELLERS_SUCCESS",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_SAVED_SELLERS_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};

const changePasswordAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "CHANGE_PASSWORD_REQUEST",
    });
    let response = await fetch("http://localhost:8000/auth/change-password", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    response = await response.json();
    dispatch({
      type: "CHANGE_PASSWORD_SUCCESS",
      payload: response.message,
    });
  } catch (error) {
    dispatch({
      type: "CHANGE_PASSWORD_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};

const editProfileAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "EDIT_PROFILE_REQUEST",
    });
    let response = await fetch("http://localhost:8000/auth/edit-user", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    response = await response.json();
    dispatch({
      type: "EDIT_PROFILE_SUCCESS",
      payload: response.message,
    });
  } catch (error) {
    dispatch({
      type: "EDIT_PROFILE_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};
const markAsReadAllProductsAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "MARK_AS_READ_ALL_PRODUCTS_REQUEST",
    });
    let response = await fetch(
      `http://localhost:8000/auth/mark-as-read-new-products/${id}`,
      {
        credentials: "include",
      }
    );
    response = await response.json();
    dispatch({
      type: "MARK_AS_READ_ALL_PRODUCTS_SUCCESS",
      payload: response.message,
    });
  } catch (error) {
    dispatch({
      type: "MARK_AS_READ_ALL_PRODUCTS_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};
const saveSellerAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "SAVE_SELLER_REQUEST",
    });
    let response = await fetch(`http://localhost:8000/auth/save-seller/${id}`, {
      credentials: "include",
    });
    response = await response.json();
    dispatch({
      type: "SAVE_SELLER_SUCCESS",
      payload: response.message,
    });
  } catch (error) {
    dispatch({
      type: "SAVE_SELLER_ERROR",
      payload: error.message || "Server connection error",
    });
  }
};
export {
  loadCurrentUserAction,
  clearErrorsAction,
  loadUserAllSellersAction,
  addSellerAction,
  pauseSellerAction,
  loadUserSavedSellersAction,
  changePasswordAction,
  editProfileAction,
  markAsReadAllProductsAction,
  saveSellerAction,
};
