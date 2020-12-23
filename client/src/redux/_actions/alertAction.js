import { SET_ALERT, REMOVE_ALERT } from "../types";
import uuid from "uuid/v4";

export const setAlert = (type, payload, timeout = 3000) => (dispatch) => {
  const id = uuid();
  dispatch({ type: type, payload: { payload, id } });
  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT, payload: id });
  }, timeout);
};
