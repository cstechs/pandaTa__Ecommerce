import {
  SUBCATEGORY_SUCCESS,
  SUBCATEGORY_FAIL,
  SUBCATEGORY_LOAD_SUCCESS,
  SUBCATEGORY_LOAD_FAIL,
  SUBCATEGORY_EMPTY_SET,
  SUBCATEGORY_UPDATE_SUCCESS,
  SUBCATEGORY_UPDATE_FAIL,
  SUBCATEGORY_DELETE_FAIL,
  SUBCATEGORY_DELETE_SUCCESS,
  SET_ALERT,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertAction";

export const addSubCategory = (subCategory) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };

    try {
      const res = await axios.post(
        "/api/subCategory/createSubCategory",
        subCategory,
        config
      );

      dispatch(
        setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
      );
      dispatch({ type: SUBCATEGORY_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch(
        setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
      );
      dispatch({ type: SUBCATEGORY_FAIL, payload: err.response.data.message });
    }
  };
};

export const getSubCategory = () => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get("/api/subCategory/", config);

      dispatch({ type: SUBCATEGORY_LOAD_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: SUBCATEGORY_LOAD_FAIL,
        payload: err.response.data.message,
      });
    }
  };
};

export const getSubCategoryByCategoryId = (CategoryId) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get(
        "/api/subCategory/getSubCategoryByCategoryId/" + CategoryId,
        config
      );

      if (res.data == []) {
        dispatch({ type: SUBCATEGORY_EMPTY_SET, payload: res.data });
      } else {
        dispatch({ type: SUBCATEGORY_LOAD_SUCCESS, payload: res.data });
      }
    } catch (err) {
      dispatch({
        type: SUBCATEGORY_LOAD_FAIL,
        payload: err.response.data.message,
      });
    }
  };
};

export const updateSubCategory = (id, subCategoryName, categoryId) => async (
  dispatch
) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.patch(
      "/api/subCategory/" + id,
      { subCategoryName, categoryId },
      config
    );

    dispatch(
      setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
    );
    dispatch({ type: SUBCATEGORY_UPDATE_SUCCESS, payload: res.data });
    window.location.reload();
  } catch (err) {
    dispatch(
      setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
    );
    dispatch({
      type: SUBCATEGORY_UPDATE_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const deleteSubCategory = (id) => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.delete("/api/subCategory/" + id, { id }, config);
    dispatch(
      setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
    );
    dispatch({ type: SUBCATEGORY_DELETE_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch(
      setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
    );
    dispatch({
      type: SUBCATEGORY_DELETE_FAIL,
      payload: err.response.data.message,
    });
  }
};
