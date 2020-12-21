import {
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_LOAD_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_SINGLE_LOAD_SUCCESS,
  PRODUCT_EMPTY_SET,
  PRODUCT_SINGLE_LOAD_FAIL,
  RELATED_PRODUCT_LOAD_SUCCESS,
  RELATED_PRODUCT_LOAD_FAIL,
  RELATED_PRODUCT_EMPTY_SET,
  CLEAR_ERRORS,
} from "../types";

const initState = {
  products: [],
  product: null,
  error: null,
  loading: true,
  relatedProducts: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case PRODUCT_LOAD_FAIL:
      return {
        ...state,
        products: [],
        error: action.payload,
      };
    case PRODUCT_EMPTY_SET:
      return {
        ...state,
        products: [],
        loading: false,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
      };
    case PRODUCT_DELETE_FAIL:
      return { ...state, error: action.payload };
    case PRODUCT_DELETE_SUCCESS:
      return { ...state };
    case PRODUCT_UPDATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case PRODUCT_SINGLE_LOAD_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case PRODUCT_SINGLE_LOAD_FAIL:
      return {
        ...state,
        product: null,
        error: action.payload,
      };
    case RELATED_PRODUCT_LOAD_SUCCESS:
      console.log("IN RELATED_PRODUCT_LOAD_SUCCESS");
      return {
        ...state,
        relatedProducts: action.payload,
        loading: false,
      };
    case RELATED_PRODUCT_LOAD_FAIL:
      return {
        ...state,
        relatedProducts: [],
        error: action.payload,
      };
    case RELATED_PRODUCT_EMPTY_SET:
      return {
        ...state,
        relatedProducts: [],
        loading: false,
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

export default productReducer;
