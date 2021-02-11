import {
       REGISTER_FAIL,
       REGISTER_SUCCESS,
       LOGIN_FAIL,
       LOGIN_SUCCESS,
       LOGOUT,
       SET_MESSAGE,
       SET_MESSAGE_EMAIL,
       SET_MESSAGE_PASSWORD,
} from './type';

import auth_service from "../services/auth_service";


const msgPass = (errors) => {
       return errors.password;
}
const msgEmail = (errors) => {
       return errors.email;
}

export const register_action = (email,password) => (dispath) => {
       return auth_service.registration_user(email,password).then((response)=>{
              dispath({
                     type:REGISTER_SUCCESS,
              });

              dispath({
                     type:SET_MESSAGE,
                     payload:response.data.message,
              })

              return Promise.resolve();
       },(error)=>{
              const errors = error.response &&
                     error.response.data &&
                     error.response.data.errors;
            
              dispath({
                     type:REGISTER_FAIL,
              });

              dispath({
                     type:SET_MESSAGE_EMAIL,
                     payload:msgEmail(errors)
              });

              dispath({
                     type:SET_MESSAGE_PASSWORD,
                     payload:msgPass(errors)
              });

              return Promise.reject();
       });
}

export const login_action = (email,password) => (dispatch) =>{

              return auth_service.login(email,password).then((response)=>{
                    

                     dispatch({
                            type:LOGIN_SUCCESS,
                            payload:{user:response}
                     });
                     return Promise.resolve();
              },(error)=>{
                     const errors = error.response &&
                            error.response.data &&
                            error.response.data.errors;
                     console.log(JSON.stringify(errors));
                     dispatch({
                            type:LOGIN_FAIL,
                     });
                     if( email in errors ){

                            dispatch({
                                   type:SET_MESSAGE_EMAIL,
                                   payload:msgEmail(errors)
                            });
                     }
                     if(password in errors){

                            dispatch({
                                   type:SET_MESSAGE_PASSWORD,
                                   payload:msgPass(errors)
                            });
                     }
                     dispatch({
                                   type:SET_MESSAGE,
                                   payload:errors.error
                     });
                     return Promise.reject();
              });

};

export const logout_action = () => {
       return {type:LOGOUT};
} 