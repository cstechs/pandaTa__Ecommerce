import {
  CART_CREATE_SUCCESS,
  CART_CREATE_FAIL,
  CART_LOAD_SUCCESS,
  CART_LOAD_FAIL,
} from "../types";
import axios from "axios";

export const addItemToCart = (productId, createdBy, quantity) => {
  return async (dispatch) => {
    const config = { header: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post(
        "/api/cart/addItemToCart",
        { productId, createdBy, quantity },
        config
      );
      //  console.log(res.data);
      dispatch({ type: CART_CREATE_SUCCESS, payload: res.data });
    } catch (err) {
      //console.log(err);
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
      dispatch({ type: CART_LOAD_FAIL, payload: err.response.data.message });
    }
  };
};

// export const removeCart = () => (dispatch) =>{
//   const config = { header: { "Content-Type": "application/json" } };
//     try {
//       const res = await axios.get("/api/cart/", config);
//       console.log(res.data);
//       dispatch({ type: CART_LOAD_SUCCESS, payload: res.data });
//     } catch (err) {
//       console.log(err);
//       dispatch({ type: CART_LOAD_FAIL, payload: err.response.data.message });
//     }

// }

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
