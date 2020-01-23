//actions file 
import axios from 'axios';

export const getCats = () => dispatch =>
{
    dispatch({type: 'GET_CATS'});
}