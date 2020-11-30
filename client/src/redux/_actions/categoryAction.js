import { CATEGORY_SUCCESS, CATEGORY_FAIL, CATEGORY_LOAD_SUCCESS, CATEGORY_LOAD_FAIL} from "../types";
import axios from 'axios';

export const addCategory = Category => {
    return async (dispatch) => { 
         const config = {header: {'Content-Type': 'application/json'}}  
        try {
            const res = await axios.post('/api/category/createCategory', Category, config)
            console.log(res.data);                 
            dispatch({type: CATEGORY_SUCCESS, payload: res.data})
        } catch (err) {
            console.log(err);
            dispatch({type: CATEGORY_FAIL, payload: err.response.data.message})
        }    
    }
  }

  export const getCategory = () => {
    return async (dispatch) => { 
         const config = {header: {'Content-Type': 'application/json'}}  
        try {
            const res = await axios.get('/api/category/', config)
            console.log(res.data);                 
            dispatch({type: CATEGORY_LOAD_SUCCESS, payload: res.data})
        } catch (err) {
            console.log(err);
            dispatch({type: CATEGORY_LOAD_FAIL, payload: err.response.data.message})
        }    
    }
  }
