import {
  CART_LOAD_SUCCESS,
  CART_LOAD_FAIL,
  CART_INCREMENT_FAIL,
  CART_INCREMENT,
  CART_SUCCESS,
  CLEAR_ERRORS,
} from "../types";

const initState = {
  cartItems: [],
  error: null,
  loading: true,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case CART_LOAD_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };
    case CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CART_LOAD_FAIL:
      return {
        ...state,
        cartItems: [],
        error: action.payload,
      };

    case CART_INCREMENT:
      return {
        ...state,
        cartItems: [],
        error: action.payload,
      };
    case CART_INCREMENT_FAIL:
      return {
        ...state,
        cartItems: [],
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default cartReducer;
