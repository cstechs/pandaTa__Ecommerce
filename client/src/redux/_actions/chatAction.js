import {
  CHAT_CREATE_FAIL,
  CHAT_CREATE_SUCCESS,
  CHAT_LOAD_SUCCESS,
  CHAT_LOAD_FAIL,
  SET_ALERT,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertAction";

export const createChat = (chat) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/chat/createChat", chat, config);

      dispatch(getChat());
      dispatch({ type: CHAT_CREATE_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, {
          message: err.response.message,
          alertType: "danger",
        })
      );
      dispatch({ type: CHAT_CREATE_FAIL, payload: err.response.data.message });
    }
  };
};

export const getChat = () => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get("/api/chat/", config);

      dispatch({ type: CHAT_LOAD_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: CHAT_LOAD_FAIL,
        payload: err.response?.data?.message,
      });
    }
  };
};
