import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, REGISTER_SUCCESS, RECOVER_SUCCESS, RECOVER_FAIL, RESET_SUCCESS, RESET_FAIL} from "../types";
import axios from 'axios';

export const register = user => {
    return async (dispatch) => { 
         const config = {header: {'Content-Type': 'application/json'}}  
        try {
            const res = await axios.post('/api/auth/register', user, config)
            console.log(res.data);                 
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
        } catch (err) {
            console.log(err);
            dispatch({type: REGISTER_FAIL, payload: err.response.data.message})
        }    
    }
  }

export const login = (email, password) => {
    return async dispatch => {
        try {
            const config = {header: {'Content-Type': 'application/json'}}  
            const res = await axios.post(`/api/auth/login`, {email, password}, config);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
            } catch (err) {
            console.log(err);
            dispatch({type: LOGIN_FAIL, payload: err.response.data.message});
            }     
        }
    }
    
export const forgot = (email) => {
    return async dispatch => {
        try {
            const config = {header: {'Content-Type': 'application/json'}}  
            const res = await axios.post(`/api/auth/recover`, {email}, config);
            dispatch({type: RECOVER_SUCCESS, payload: res.data});
            } catch (err) {
            console.log(err);
            dispatch({type: RECOVER_FAIL, payload: err.response.data.message});
            }     
        }
    }
    
    export const resetpassword = (password, confirmpassword) => {
        return async dispatch => {
            try {
                const config = {header: {'Content-Type': 'application/json'}}  
                const res = await axios.post(`/api/auth/reset`, {password, confirmpassword}, config);
                dispatch({type: RESET_SUCCESS, payload: res.data});
                } catch (err) {
                console.log(err);
                dispatch({type: RESET_FAIL, payload: err.response.data.message});
                }     
            }
        }

