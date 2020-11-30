import {PRODUCT_LOAD_SUCCESS, PRODUCT_LOAD_FAIL, CLEAR_ERRORS} from '../types'

const initState = {
  products: [],
  error: null,
  loading: true
}

const productReducer = (state = initState, action) => {
  switch(action.type){
      case PRODUCT_LOAD_SUCCESS:
        return {
          ...state,
          products: action.payload,
          loading: false
        }
      case PRODUCT_LOAD_FAIL:
          return {
            ...state,
            products: [],
            error: action.payload
          } 
      case PRODUCT_LOAD_FAIL:
        return {
          ...state,
          error: null
          }
      default:
        return state;
  }     
}

export default productReducer;