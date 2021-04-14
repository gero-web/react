import { SET_MESSAGE,CLEAR_MESSAGE } from "../actions/type";


const initialState = {messagePass:"",messageEmail:"",message:""};

export default  function f (state = initialState,action){

       const {type,payload} = action;

       switch (type) {
              case SET_MESSAGE:
                     return {message:payload}

             
              case CLEAR_MESSAGE:
                     return {message:""}        
       
              default:
                     return state;
       }

}