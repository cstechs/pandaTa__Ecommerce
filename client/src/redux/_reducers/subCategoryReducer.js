import {
  SUBCATEGORY_LOAD_SUCCESS,
  SUBCATEGORY_LOAD_FAIL,
  SUBCATEGORY_EMPTY_SET,
  SUBCATEGORY_UPDATE_FAIL,
  SUBCATEGORY_UPDATE_SUCCESS,
  SUBCATEGORY_DELETE_SUCCESS,
  SUBCATEGORY_DELETE_FAIL,
  CLEAR_ERRORS,
} from "../types";

const initState = {
  subCategories: [],
  error: null,
  loading: true,
};

const subCategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case SUBCATEGORY_LOAD_SUCCESS:
      return {
        ...state,
        subCategories: action.payload,
        loading: false,
      };
    case SUBCATEGORY_LOAD_FAIL:
      return {
        ...state,
        subCategories: [],
        error: action.payload,
      };
    case SUBCATEGORY_UPDATE_SUCCESS:
      return {
        ...state,
      };
    case SUBCATEGORY_UPDATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SUBCATEGORY_DELETE_SUCCESS:
      return {
        ...state,
      };
    case SUBCATEGORY_DELETE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SUBCATEGORY_EMPTY_SET:
      return {
        ...state,
        subCategories: [],
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

export default subCategoryReducer;
