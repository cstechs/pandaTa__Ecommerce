import {
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_SUCCESS,
  SET_ALERT,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertAction";

export const getUser = () => async (dispatch) => {
  try {
    const config = { header: { "Content-Type": "application/json" } };
    const res = await axios.get(`/api/user`, config);

    dispatch({ type: USER_LOAD_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_LOAD_FAIL, payload: err.response.data.message });
  }
};

export const updateUser = (user, id) => async (dispatch) => {
  try {
    const config = { header: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/` + id, user, config);
    dispatch(
      setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
    );
    dispatch({ type: USER_UPDATE_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err.message);

    dispatch({ type: USER_UPDATE_FAIL, payload: err.message });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const config = { header: { "Content-Type": "application/json" } };
    const res = await axios.delete(`/api/user/` + id, config);

    dispatch(
      setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
    );
    dispatch({ type: USER_DELETE_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_DELETE_FAIL, payload: err.message });
  }
};
