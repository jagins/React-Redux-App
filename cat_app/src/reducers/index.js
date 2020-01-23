//Reducers file for our app
import axios from 'axios';

const initalState = {
    isLoading: false,
    cats: [],
    error: ''
};

export const reducer = (state = initalState, action) => 
{
   switch(action.type)
   {
       default:
           return state;
   }
}