//actions file 
import axios from 'axios';

export const getCats = () => dispatch =>
{
    dispatch({type: 'GET_CATS'});
    axios.defaults.headers.common['x-api-key'] = 'facc29dd-b208-46fc-82d7-58f6cbdc8974';

    axios.get('https://api.thecatapi.com/v1/images/search?limit=20')
    .then(res => {
        dispatch({type: 'SUCCESS', payload: res.data});
    })
    .catch(err => {
        dispatch({type: 'FAILURE', payload: err.response});
    });
}