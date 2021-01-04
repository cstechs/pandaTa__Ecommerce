import {
  CART_CREATE_SUCCESS,
  CART_CREATE_FAIL,
  CART_LOAD_SUCCESS,
  CART_LOAD_FAIL,
  CART_DELETE_FAIL,
  CART_DELETE_SUCCESS,
  CART_INCREMENT_SUCCESS,
  CART_INCREMENT_FAIL,
  SET_ALERT,
  CART_DECREMENT_SUCCESS,
  CART_DECREMENT_FAIL,
  CART_REMOVE_ITEM_SUCCESS,
  CART_REMOVE_ITEM_FAIL,
} from "../types";
import axios from "axios";
import { setAlert } from "./alertAction";

export const addItemToCart = (productId, createdBy, quantity) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post(
        "/api/cart/addItemToCart",
        { productId, createdBy, quantity },
        config
      );
      dispatch(
        setAlert(SET_ALERT, { message: res.data.mgs, alertType: "success" })
      );
      dispatch(getCart());
      dispatch({ type: CART_CREATE_SUCCESS, payload: res.data });
    } catch (err) {
      //console.log(err);
      dispatch(
        setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
      );
      dispatch({ type: CART_CREATE_FAIL, payload: err.response.data.message });
    }
  };
};

export const getCart = () => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.get("/api/cart/", config);
      // console.log(res.data);
      dispatch({ type: CART_LOAD_SUCCESS, payload: res.data });
    } catch (err) {
      //  console.log(err);
      // dispatch(
      //   setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
      // );
      dispatch({ type: CART_LOAD_FAIL, payload: err.response.data.message });
    }
  };
};

export const removeCart = () => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.delete("/api/cart/empty-cart", config);
    console.log(res.data);
    dispatch(
      setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
    );
    dispatch({ type: CART_DELETE_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch(
      setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
    );
    dispatch({ type: CART_DELETE_FAIL, payload: err.response.data.message });
  }
};

export const subtractCartQuantity = (productId, cartId) => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.patch(
      "/api/cart/subtractcartquantity",
      { productId, cartId },
      config
    );

    dispatch(getCart());
    // dispatch(
    //   setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
    // );
    dispatch({ type: CART_DECREMENT_SUCCESS, payload: res.data });
  } catch (err) {
    // dispatch(
    //   setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
    // );
    dispatch({ type: CART_DECREMENT_FAIL, payload: err.response.data.message });
  }
};

export const addCartQuantity = (productId, cartId) => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };
  try {
    const res = await axios.patch(
      "/api/cart/addquantitycart",
      { productId, cartId },
      config
    );

    // dispatch(
    //   setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
    // );

    dispatch(getCart());
    dispatch({ type: CART_INCREMENT_SUCCESS, payload: res.data });
  } catch (err) {
    // dispatch(
    //   setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
    // );
    dispatch({ type: CART_INCREMENT_FAIL, payload: err.response.data.message });
  }
};

export const removeCartItem = (CreatedBy, Cartid) => async (dispatch) => {
  const config = { header: { "Content-Type": "application/json" } };

  try {
    const res = await axios.delete(
      "/api/cart/removeproductcart/" + CreatedBy + "/" + Cartid,
      config
    );

    // dispatch(
    //   setAlert(SET_ALERT, { message: res.data.message, alertType: "success" })
    // );
    dispatch(getCart());
    dispatch({ type: CART_REMOVE_ITEM_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch(
      setAlert(SET_ALERT, { message: err.message, alertType: "danger" })
    );
    dispatch({
      type: CART_REMOVE_ITEM_FAIL,
      payload: err.response.data.message,
    });
  }
};
// export const cartIncrement = (productId, quantity) => {
//   return async (dispatch) => {
//     const config = { header: { "Content-Type": "application/json" } };
//     try {
//       const res = await axios.patch(
//         "/api/cart/addItemToCart",
//         { productId, quantity },
//         config
//       );
//       console.log(res.data);
//       dispatch({ type: CART_INCREMENT, payload: res.data });
//     } catch (err) {
//       console.log(err);
//       dispatch({
//         type: CART_INCREMENT_FAIL,
//         payload: err.response.data.message,
//       });
//     }
//   };
// };
