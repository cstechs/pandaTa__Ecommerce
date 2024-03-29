import {
  PRODUCT_FAIL,
  PRODUCT_SUCCESS,
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_FAIL,
  RELATED_PRODUCT_LOAD_SUCCESS,
  RELATED_PRODUCT_LOAD_FAIL,
  PRODUCT_SINGLE_LOAD_SUCCESS,
  RELATED_PRODUCT_EMPTY_SET,
  PRODUCT_SINGLE_LOAD_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_SUCCESS,
} from "../types";
import axios from "axios";

export const addProduct = (product) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "multipart/form-data" } };
    try {
      const res = await axios.post(
        "/api/product/createProduct",
        product,
        config
      );

      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: PRODUCT_FAIL, payload: err.response.data.message });
    }
  };
};

export const getProduct = () => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get("/api/product/", config);

      dispatch({ type: PRODUCT_LOAD_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: PRODUCT_LOAD_FAIL,
        payload: err.response?.data?.message,
      });
    }
  };
};

export const getProductById = (productId) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get("/api/product/" + productId, config);

      dispatch({ type: PRODUCT_SINGLE_LOAD_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: PRODUCT_SINGLE_LOAD_FAIL,
        payload: err.response?.data?.message,
      });
    }
  };
};

export const updateProduct = (product, productId) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "multipart/form-data" } };
    try {
      const res = await axios.patch(
        "/api/product/" + productId,
        product,
        config
      );

      dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: res?.data });
      window.location.reload();
    } catch (err) {
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload: err?.response?.data?.message,
      });
    }
  };
};

export const getProductBySubCategoryId = (CategoryId) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get(
        "/api/product/getProductBySubCategoryId/" + CategoryId,
        config
      );

      if (res.data === []) {
        dispatch({ type: RELATED_PRODUCT_EMPTY_SET, payload: res.data });
      } else {
        dispatch({ type: RELATED_PRODUCT_LOAD_SUCCESS, payload: res.data });
      }
    } catch (err) {
      dispatch({
        type: RELATED_PRODUCT_LOAD_FAIL,
        payload: err.response.data.message,
      });
    }
  };
};

export const deleteProduct = (id) => async (dispatch) => {
  const config = { header: { "Content-Type": "multipart/form-data" } };
  try {
    const res = await axios.delete("/api/product/" + id, { id }, config);

    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: res.data });
    window.location.reload();
  } catch (err) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: err?.response?.data?.message,
    });
  }
};
