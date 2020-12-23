import {
  REGISTER_SUCCESS,
  CLEAR_ERRORS,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  USER_LOADED,
  RECOVER_SUCCESS,
  RECOVER_FAIL,
  RESET_SUCCESS,
  RESET_FAIL,
  VERIFY_SUCCESS,
  VERIFY_FAIL,
} from "../types";

const initState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
  user: {},
  token: localStorage.getItem("token"),
  error: null,
  errors: null,
  loading: true,
  msg: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
    case VERIFY_SUCCESS:
      return {
        ...state,
        msg: action.payload.message,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        user: action.payload.user,
      };
    case RECOVER_SUCCESS:
    case RESET_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
        msg: action.payload.messsage,
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log("called");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        errors: action.payload,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case RECOVER_FAIL:
    case RESET_FAIL:
    case VERIFY_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      console.log("called");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
