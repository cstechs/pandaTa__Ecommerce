import {
  CHAT_FAIL,
  CHAT_SUCCESS,
  CHAT_LOAD_SUCCESS,
  CHAT_LOAD_FAIL,
} from "../types";
import axios from "axios";

export const createChat = (chat) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/chat/createChat", chat, config);
      //console.log(res.data);
      dispatch({ type: CHAT_SUCCESS, payload: res.data });
    } catch (err) {
      //   console.log(err);
      dispatch({ type: CHAT_FAIL, payload: err.response.data.message });
    }
  };
};

export const getChat = () => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get("/api/chat/", config);
      //  console.log(res.data);
      dispatch({ type: CHAT_LOAD_SUCCESS, payload: res.data });
    } catch (err) {
      //  console.log(err);
      dispatch({
        type: CHAT_LOAD_FAIL,
        payload: err.response?.data?.message,
      });
    }
  };
};
