import {
  CATEGORY_SUCCESS,
  CATEGORY_FAIL,
  CATEGORY_LOAD_SUCCESS,
  CATEGORY_LOAD_FAIL,
  CATEGORY_EMPTY_SET,
  CATEGORY_SINGLE_LOAD_SUCCESS,
  CATEGORY_SINGLE_LOAD_FAIL,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
} from "../types";
import axios from "axios";

export const addCategory = (Category) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post(
        "/api/category/createCategory",
        Category,
        config
      );
      // console.log(res.data);
      dispatch({ type: CATEGORY_SUCCESS, payload: res.data });
    } catch (err) {
      // console.log(err);
      dispatch({ type: CATEGORY_FAIL, payload: err.response.data.message });
    }
  };
};

export const getCategory = () => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get("/api/category/", config);
      //console.log(res.data);
      dispatch({ type: CATEGORY_LOAD_SUCCESS, payload: res.data });
    } catch (err) {
      // console.log(err);
      dispatch({
        type: CATEGORY_LOAD_FAIL,
        payload: err.response.data.message,
      });
    }
  };
};

export const getCategoryBySubCategoryId = (SubCategoryId) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get("/api/category/" + SubCategoryId, config);
      //console.log(res.data);
      if (res.data == []) {
        dispatch({ type: CATEGORY_EMPTY_SET, payload: res.data });
      } else {
        dispatch({ type: CATEGORY_SINGLE_LOAD_SUCCESS, payload: res.data });
      }
    } catch (err) {
      //  console.log(err);
      dispatch({
        type: CATEGORY_SINGLE_LOAD_FAIL,
        payload: err.response.data.message,
      });
    }
  };
};

export const updateCategory = (id, categoryName) => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.patch(
      "/api/category/" + id,
      { categoryName },
      config
    );
    //console.log(res.data);

    dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: res.data });
    window.location.reload();
  } catch (err) {
    //  console.log(err);
    dispatch({
      type: CATEGORY_UPDATE_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.delete("/api/category/" + id, { id }, config);

    dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: CATEGORY_DELETE_FAIL,
      payload: err.response.data.message,
    });
  }
};
