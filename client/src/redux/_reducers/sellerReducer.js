import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_SUCCESS,
  SELLER_REGISTER_FAIL,
  SELLER_REGISTER_SUCCESS,
  SELLER_LOAD_SUCCESS,
  SELLER_LOAD_FAIL,
  SINGLE_SELLER_LOAD_SUCCESS,
  SINGLE_SELLER_LOAD_FAIL,
  SINGLE_SELLER_PRODUCTS_LOAD_SUCCESS,
  SINGLE_SELLER_PRODUCTS_LOAD_FAIL,
} from "../types";

const initState = {
  sellers: [],
  seller: null,
  error: null,
  loading: true,
  token: null,
  sellerproducts: [],
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
        seller: action.payload.seller,
      };
    case SELLER_LOGIN_FAIL:
      return { ...state };
    case SELLER_REGISTER_SUCCESS:
      return { ...state };
    case SELLER_REGISTER_FAIL:
      return { ...state };
    case SELLER_LOAD_SUCCESS:
      return {
        ...state,
        sellers: action.payload.sellers,
      };
    case SELLER_LOAD_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SINGLE_SELLER_LOAD_SUCCESS:
      return {
        ...state,
        seller: action.payload.data,
      };
    case SINGLE_SELLER_LOAD_FAIL:
      return { ...state, error: action.payload };
    case SINGLE_SELLER_PRODUCTS_LOAD_SUCCESS:
      return {
        ...state,
        sellerproducts: action.payload.data,
      };
    case SINGLE_SELLER_PRODUCTS_LOAD_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};

export default sellerReducer;
