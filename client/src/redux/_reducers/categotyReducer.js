import {CATEGORY_LOAD_SUCCESS, CATEGORY_LOAD_FAIL, CLEAR_ERRORS} from '../types'

const initState = {
  categories: [],
  error: null,
  loading: true
}

const categoryReducer = (state = initState, action) => {
  switch(action.type){
      case CATEGORY_LOAD_SUCCESS:
        return {
          ...state,
          categories: action.payload,
          loading: false
        }
      case CATEGORY_LOAD_FAIL:
          return {
            ...state,
            categories: [],
            error: action.payload
          } 
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null
          }
      default:
        return state;
  }     
}

export default categoryReducer;