//Reducers file for our app
const initalState = {
    isLoading: false,
    cats: '',
    error: ''
};

export const reducer = (state = initalState, action) => 
{
   switch(action.type)
   {
       case 'GET_CATS':
           return {
               ...state,
               isLoading: true
           }
        case 'SUCCESS':
            return {
                ...state,
                isLoading: false,
                cats: [...state.cats, action.payload]
            }
        case 'FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }           
       default:
           return state;
   }
}