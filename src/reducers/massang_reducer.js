import { SET_MESSAGE,SET_MESSAGE_PASSWORD,CLEAR_MESSAGE, SET_MESSAGE_EMAIL } from "../actions/type";


const initialState = {messagePass:"",messageEmail:"",message:""};

export default  function f (state = initialState,action){

       const {type,payload} = action;

       switch (type) {
              case SET_MESSAGE:
                     return {message:payload}

              case SET_MESSAGE_PASSWORD:
                     return {
                            ...state,
                            messagePass:payload
                     }
              case SET_MESSAGE_EMAIL:
                            return {
                                   ...state,
                                   messageEmail:payload
              }
              case CLEAR_MESSAGE:
                     return {messagePass:"",messageEmail:"",message:""}        
       
              default:
                     return state;
       }

}