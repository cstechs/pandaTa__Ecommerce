import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_SUCCESS,
  SELLER_REGISTER_FAIL,
  SELLER_REGISTER_SUCCESS,
  SET_ALERT,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertAction";

export const sellerregister = (seller) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/seller/register", seller, config);
      console.log(res);
      dispatch(
        setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
      );
      dispatch({ type: SELLER_REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
      );
      dispatch({ type: SELLER_REGISTER_FAIL, payload: err.response.data });
    }
  };
};

export const sellerlogin = (email, password) => {
  return async (dispatch) => {
    try {
      const config = { header: { "Content-Type": "application/json" } };
      const res = await axios.post(
        `/api/seller/login`,
        { email, password },
        config
      );
      dispatch({ type: SELLER_LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, {
          message: "Invalid account credentials",
          alertType: "danger",
        })
      );
      dispatch({ type: SELLER_LOGIN_FAIL, payload: err.response.data.message });
    }
  };
};
