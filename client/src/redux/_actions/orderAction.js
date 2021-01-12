import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  LOAD_ORDERS_FAIL,
  LOAD_ORDERS_SUCCESS,
  LOAD_SINGLE_ORDER_FAIL,
  LOAD_SINGLE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_SUCCESS,
  SET_ALERT,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertAction";

export const createOrder = (order) => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.post("/api/order/createOrder", order, config);

    dispatch(
      setAlert(SET_ALERT, {
        message: res.data.message,
        alertType: "success",
      })
    );
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch(
      setAlert(SET_ALERT, {
        message: err.response.message,
        alertType: "danger",
      })
    );
    dispatch({ type: CREATE_ORDER_FAIL, payload: err.response.data.message });
  }
};

export const getOrder = () => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.get("/api/order", config);

    dispatch({ type: LOAD_ORDERS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch(
      setAlert(SET_ALERT, {
        message: err.response.message,
        alertType: "danger",
      })
    );
    dispatch({ type: LOAD_ORDERS_FAIL, payload: err.response.data.message });
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.get("/api/order/" + orderId, config);

    dispatch({ type: LOAD_SINGLE_ORDER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch(
      setAlert(SET_ALERT, {
        message: err.response.message,
        alertType: "danger",
      })
    );
    dispatch({
      type: LOAD_SINGLE_ORDER_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const updateOrder = (orderId, order) => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.patch("/api/order/" + orderId, order, config);

    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch(
      setAlert(SET_ALERT, {
        message: err.response.message,
        alertType: "danger",
      })
    );
    dispatch({ type: UPDATE_ORDER_FAIL, payload: err.response.data.message });
  }
};
