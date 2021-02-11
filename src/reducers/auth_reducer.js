import {
       REGISTER_FAIL,
       REGISTER_SUCCESS,
       LOGOUT,
       LOGIN_SUCCESS,
       LOGIN_FAIL,
} from "../actions/type";
import auth_service from "../services/auth_service";
const user = JSON.parse(localStorage.getItem('user'));
const intialState = user ? 
       { isLoggindIn: true, user}:
       { isLoggindIn: false,user:null};

export default function auth(state = intialState,action) {
       
       const {type,payload} = action;

       switch (type) {
              case REGISTER_SUCCESS:
                     return {
                            ...state,
                            isLoggindIn:false,
              }
              case REGISTER_FAIL:
                     return {
                            ...state,
                            isLoggingdIn:false,
              }
              
              case LOGIN_SUCCESS:
                     return {
                            ...state,
                            isLoggindIn:true,
                            user:payload.user
              }       
              case LOGIN_FAIL:
                     return {
                            ...state,
                            isLoggindIn: false,
                            user:null,
              }
              case LOGOUT:
                     auth_service.logout();
                     return {
                            ...state,
                            isLoggindIn: false,
                            user:null,
              }
              
              default:
                    return state;
       }
}