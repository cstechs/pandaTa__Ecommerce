import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import categoryReducer from "./categotyReducer";
import subCategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import chatReducer from "./chatReducer";
import wishlistReducer from "./wishlistReducer";

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  category: categoryReducer,
  subCategory: subCategoryReducer,
  product: productReducer,
  cart: cartReducer,
  chat: chatReducer,
  wishlist: wishlistReducer,
});
