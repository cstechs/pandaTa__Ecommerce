import {
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  LOAD_ORDERS_SUCCESS,
  LOAD_ORDERS_FAIL,
  LOAD_SINGLE_ORDER_SUCCESS,
  LOAD_SINGLE_ORDER_FAIL,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_SUCCESS,
} from "../types";

const initState = {
  orders: [],
  order: null,
  error: null,
  loading: true,
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ORDER_SUCCESS:
      return { ...state };
    case CREATE_ORDER_FAIL:
      return { ...state };
    case LOAD_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload.data,
      };
    case LOAD_ORDERS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_SINGLE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload.data,
      };
    case LOAD_SINGLE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload.data,
      };
    case UPDATE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
