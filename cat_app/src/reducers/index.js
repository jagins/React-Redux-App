//Reducers file for our app
const initalState = {
    isLoading: false,
    cats: null,
    error: ''
};

export const reducer = (state = initalState, action) => 
{
   switch(action.type)
   {
       case 'GET_CATS':
           return{
               ...state,
               isLoading: true
           }
       default:
           return state;
   }
}