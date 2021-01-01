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
  token: null,
};

const sellerReducer = (state = initState, action) => {
  switch (action.type) {
    case SELLER_LOGIN_SUCCESS:
      console.log("red", action.payload);
      localStorage.setItem("user", JSON.stringify(action.payload.seller));
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        token: action.payload.token,
        sellers: action.payload.seller,
      };
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
