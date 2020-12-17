import {
  CHAT_LOAD_SUCCESS,
  CHAT_LOAD_FAIL,
  CHAT_EMPTY_SET,
  CLEAR_ERRORS,
  CHAT_SUCCESS,
} from "../types";

const initState = {
  chats: [],
  error: null,
  loading: true,
};

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case CHAT_LOAD_SUCCESS:
      {
        console.log("ac", action.payload);
      }
      return {
        ...state,
        chats: action.payload,
        loading: false,
      };
    case CHAT_SUCCESS:
      return {
        ...state,
        chats: action.payload.data,
      };
    case CHAT_LOAD_FAIL:
      return {
        ...state,
        chats: [],
        error: action.payload,
      };
    case CHAT_EMPTY_SET:
      return {
        ...state,
        chats: [],
        loading: false,
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

export default chatReducer;
