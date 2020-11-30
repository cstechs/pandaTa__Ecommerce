import {REGISTER_SUCCESS, CLEAR_ERRORS, LOGIN_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGOUT, AUTH_ERROR, USER_LOADED, RECOVER_SUCCESS, RECOVER_FAIL, RESET_SUCCESS, RESET_FAIL} from '../types'

const initState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: null,
  token: localStorage.getItem('token'),
  error: null,
  loading: true
}

const authReducer = (state = initState, action) => {
  switch(action.type){
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: action.payload
        }
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
      case RECOVER_SUCCESS:
      case RESET_SUCCESS:
        localStorage.setItem('token', action.payload.token)
        return {
          ...state,
          token: action.payload,
          isAuthenticated: true,
          loading: false
        }
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case RECOVER_FAIL:
      case RESET_FAIL:
      case LOGOUT:
          localStorage.removeItem('token') 
          return {
            ...state,
            token: null,
            isAuthenticated: false,
            user: null,
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

export default authReducer;