import {
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertAction";

export const getUser = () => async (dispatch) => {
  try {
    const config = { header: { "Content-Type": "application/json" } };
    const res = await axios.get(`/api/user`, config);
    dispatch({ type: USER_LOAD_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch(setAlert(err.message, "danger"));
    dispatch({ type: USER_LOAD_FAIL, payload: err.response.data.message });
  }
};

export const updateUser = (user, id) => async (dispatch) => {
  try {
    console.log("user", user, "idd", id);
    const config = { header: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/` + id, user, config);
    dispatch({ type: USER_UPDATE_SUCCESS, payload: res.data });
  } catch (err) {
    console.log("err", err.message);
    dispatch(setAlert(err.message, "danger"));
    dispatch({ type: USER_UPDATE_FAIL, payload: err.message });
  }
};
