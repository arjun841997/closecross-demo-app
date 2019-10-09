import axios from 'axios';
import { GET_LISTING } from './types';

export const getListings = () => dispatch => {  
  axios
    .get('http://localhost:5000/cryptocurrency/listings/latest')
    .then(res =>{
       dispatch({
        type: GET_LISTING,
        payload: res.data
      })
    }      
    )
    .catch(err =>{
      console.log(err);
    }
    );
};
