import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RECOVER_SUCCESS,
  RECOVER_FAIL,
  RESET_SUCCESS,
  RESET_FAIL,
  LOGOUT,
  VERIFY_SUCCESS,
  VERIFY_FAIL,
  SET_ALERT,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertAction";

export const register = (user) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/auth/register", user, config);
      dispatch(
        setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
      );
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, {
          message: err.response.data.message,
          alertType: "danger",
        })
      );
      dispatch({ type: REGISTER_FAIL, payload: err.response.data });
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const config = { header: { "Content-Type": "application/json" } };
      const res = await axios.post(
        `/api/auth/login`,
        { email, password },
        config
      );

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, {
          message: err.response.data.message,
          alertType: "danger",
        })
      );
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    }
  };
};

export const forgot = (email) => {
  return async (dispatch) => {
    try {
      const config = { header: { "Content-Type": "application/json" } };
      const res = await axios.post(`/api/auth/recover`, { email }, config);

      dispatch(
        setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
      );
      dispatch({ type: RECOVER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
      );
      dispatch({ type: RECOVER_FAIL, payload: err.message });
    }
  };
};

export const resetpassword = (password, confirmPassword, resetToken) => {
  return async (dispatch) => {
    try {
      const config = { header: { "Content-Type": "application/json" } };
      const res = await axios.post(
        `/api/auth/reset/` + resetToken,
        { password, confirmPassword },
        config
      );
      dispatch(
        setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
      );
      dispatch({ type: RESET_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
      );
      dispatch({ type: RESET_FAIL, payload: err.message });
    }
  };
};

export const verifyaccount = (token) => {
  return async (dispatch) => {
    try {
      const config = { header: { "Content-Type": "application/json" } };
      const res = await axios.get(`/api/auth/verify/` + token, config);

      dispatch(
        setAlert(SET_ALERT, { message: res.data, alertType: "success" })
      );
      dispatch({ type: VERIFY_SUCCESS, payload: res.data });
    } catch {
      try {
        const config = { header: { "Content-Type": "application/json" } };
        const res = await axios.get(`/api/seller/verify/` + token, config);

        dispatch(
          setAlert(SET_ALERT, { message: res.data, alertType: "success" })
        );
        dispatch({ type: VERIFY_SUCCESS, payload: res.data });
      } catch (err) {}
    }
  };
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
