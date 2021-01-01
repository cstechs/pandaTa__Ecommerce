import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_SUCCESS,
  SELLER_REGISTER_FAIL,
  SELLER_REGISTER_SUCCESS,
} from "../types";

const initState = {
  sellers: [],
  error: null,
  loading: true,
};

const sellerReducer = (state = initState, action) => {
  switch (action.type) {
    case SELLER_LOGIN_SUCCESS:
      //localStorage.setItem("user", JSON.stringify(action.payload.user));
      return { ...state };
    case SELLER_LOGIN_FAIL:
      return { ...state };
    case SELLER_REGISTER_SUCCESS:
      return { ...state };
    case SELLER_REGISTER_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};

export default sellerReducer;
