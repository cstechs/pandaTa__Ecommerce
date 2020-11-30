import { PRODUCT_FAIL, PRODUCT_SUCCESS ,PRODUCT_LOAD_SUCCESS , PRODUCT_LOAD_FAIL} from "../types";
import axios from 'axios';

export const addProduct = product => {
    return async (dispatch) => { 
         const config = {header: {'Content-Type': 'multipart/form-data'}}  
        try {
            const res = await axios.post('/api/product/createProduct', product, config)
            console.log(res.data);                 
            dispatch({type: PRODUCT_SUCCESS, payload: res.data})
        } catch (err) {
            console.log(err);
            dispatch({type: PRODUCT_FAIL, payload: err.response.data.message})
        }    
    }
  }


  export const getProduct = () => {
    return async (dispatch) => { 
         const config = {header: {'Content-Type': 'application/json'}}  
        try {
            const res = await axios.get('/api/product/', config)
            console.log(res.data);                 
            dispatch({type: PRODUCT_LOAD_SUCCESS, payload: res.data})
        } catch (err) {
            console.log(err);
            dispatch({type: PRODUCT_LOAD_FAIL, payload: err.response?.data?.message})
        }    
    }
  }