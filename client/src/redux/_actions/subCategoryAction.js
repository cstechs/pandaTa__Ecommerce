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
} from "../types";
import axios from "axios";

export const addSubCategory = (subCategory) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };

    try {
      const res = await axios.post(
        "/api/subCategory/createSubCategory",
        subCategory,
        config
      );
      // console.log(res.data);
      dispatch({ type: SUBCATEGORY_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: SUBCATEGORY_FAIL, payload: err.response.data.message });
    }
  };
};

export const getSubCategory = () => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get("/api/subCategory/", config);
      // console.log(res.data);
      dispatch({ type: SUBCATEGORY_LOAD_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);
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
      //  console.log(res.data);
      if (res.data == []) {
        dispatch({ type: SUBCATEGORY_EMPTY_SET, payload: res.data });
      } else {
        dispatch({ type: SUBCATEGORY_LOAD_SUCCESS, payload: res.data });
      }
    } catch (err) {
      //  console.log(err);
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
  console.log(id, subCategoryName, categoryId);
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.patch(
      "/api/subCategory/" + id,
      { subCategoryName, categoryId },
      config
    );
    //console.log(res.data);

    dispatch({ type: SUBCATEGORY_UPDATE_SUCCESS, payload: res.data });
    window.location.reload();
  } catch (err) {
    //  console.log(err);
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

    dispatch({ type: SUBCATEGORY_DELETE_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: SUBCATEGORY_DELETE_FAIL,
      payload: err.response.data.message,
    });
  }
};
