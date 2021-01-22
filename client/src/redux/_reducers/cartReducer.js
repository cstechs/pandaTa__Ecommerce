import {
  CART_LOAD_SUCCESS,
  CART_LOAD_FAIL,
  CART_INCREMENT_FAIL,
  CART_INCREMENT_SUCCESS,
  CART_CREATE_SUCCESS,
  CART_CREATE_FAIL,
  CART_DECREMENT_SUCCESS,
  CART_DECREMENT_FAIL,
  CART_REMOVE_ITEM_SUCCESS,
  CART_REMOVE_ITEM_FAIL,
  CLEAR_ERRORS,
  CART_DELETE_SUCCESS,
  CART_DELETE_FAIL,
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
    case CART_CREATE_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.data,
      };
    case CART_CREATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CART_LOAD_FAIL:
      return {
        ...state,
        cartItems: [],
        error: action.payload,
      };

    case CART_INCREMENT_SUCCESS:
      return {
        ...state,
      };
    case CART_INCREMENT_FAIL:
      return {
        ...state,
        // cartItems: [],
        error: action.payload,
      };
    case CART_DECREMENT_SUCCESS:
      return {
        ...state,
      };
    case CART_DECREMENT_FAIL:
      return {
        ...state,
        cartItems: [],
        error: action.payload,
      };
    case CART_REMOVE_ITEM_SUCCESS:
      return { ...state, cartItems: action.payload.data };
    case CART_REMOVE_ITEM_FAIL:
      return { ...state };
    case CART_DELETE_FAIL:
      return { ...state, error: action.payload };
    case CART_DELETE_SUCCESS:
      return { ...state };
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
