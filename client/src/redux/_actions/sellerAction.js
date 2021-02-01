import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_SUCCESS,
  SELLER_REGISTER_FAIL,
  SELLER_REGISTER_SUCCESS,
  SELLER_UPDATE_SUCCESS,
  SELLER_UPDATE_FAIL,
  SET_ALERT,
  SELLER_LOAD_SUCCESS,
  SELLER_LOAD_FAIL,
  SINGLE_SELLER_LOAD_SUCCESS,
  SINGLE_SELLER_LOAD_FAIL,
  SINGLE_SELLER_PRODUCTS_LOAD_FAIL,
  SINGLE_SELLER_PRODUCTS_LOAD_SUCCESS,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertAction";

export const sellerregister = (seller) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/seller/register", seller, config);

      dispatch(
        setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
      );
      dispatch({ type: SELLER_REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, {
          message: err.response.data.message,
          alertType: "danger",
        })
      );
      dispatch({ type: SELLER_REGISTER_FAIL, payload: err.response.data });
    }
  };
};

export const sellerupdate = (seller, sellerId) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "multipart/form-data" } };
    try {
      const res = await axios.patch("/api/seller/" + sellerId, seller, config);

      dispatch(
        setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
      );
      dispatch({ type: SELLER_UPDATE_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, {
          message: err.response.data.message,
          alertType: "danger",
        })
      );
      dispatch({ type: SELLER_UPDATE_FAIL, payload: err.response.data });
    }
  };
};

export const sellerlogin = (userEmail, userpassword) => {
  return async (dispatch) => {
    try {
      const config = { header: { "Content-Type": "application/json" } };
      const res = await axios.post(
        `/api/seller/login`,
        { userEmail, userpassword },
        config
      );

      dispatch({ type: SELLER_LOGIN_SUCCESS, payload: res.data });
      dispatch(
        setAlert(SET_ALERT, {
          message: "Login Successfully.",
          alertType: "success",
        })
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, {
          message: err.response.data.message,
          alertType: "danger",
        })
      );
      dispatch({ type: SELLER_LOGIN_FAIL, payload: err.response.data.message });
    }
  };
};

export const getSellers = () => async (dispatch) => {
  try {
    const config = { header: { "Content-Type": "application/json" } };
    const res = await axios.get(`/api/seller`, config);

    dispatch({ type: SELLER_LOAD_SUCCESS, payload: res.data });
  } catch (err) {
    // dispatch(
    //   setAlert(SET_ALERT, { message: err.response.message, alertType: "danger" })
    // );
    dispatch({ type: SELLER_LOAD_FAIL, payload: err.response.data.message });
  }
};

export const getSellerById = (id) => async (dispatch) => {
  try {
    const config = { header: { "Content-Type": "application/json" } };
    const res = await axios.get(`/api/seller/getSellerById/` + id, config);

    dispatch({ type: SINGLE_SELLER_LOAD_SUCCESS, payload: res.data });
  } catch (err) {
    // dispatch(
    //   setAlert(SET_ALERT, { message: err.response.message, alertType: "danger" })
    // );
    dispatch({ type: SINGLE_SELLER_LOAD_FAIL, payload: err.message });
  }
};

export const getSellerProducts = (id) => async (dispatch) => {
  try {
    const config = { header: { "Content-Type": "application/json" } };
    const res = await axios.get(
      `/api/product/getProductsByCreatedBy/` + id,
      config
    );

    dispatch({ type: SINGLE_SELLER_PRODUCTS_LOAD_SUCCESS, payload: res.data });
  } catch (err) {
    // dispatch(
    //   setAlert(SET_ALERT, { message: err.response.message, alertType: "danger" })
    // );
    dispatch({ type: SINGLE_SELLER_PRODUCTS_LOAD_FAIL, payload: err.message });
  }
};
