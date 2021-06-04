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


export const register_action = (email,password) => (dispatch) => {
       return auth_service.registration_user(email,password).then((response)=>{
              dispatch({
                     type:REGISTER_SUCCESS,
              });

              dispatch({
                     type:SET_MESSAGE,
                     payload:response.data.message,
              })

              return Promise.resolve();
       },(error)=>{
              const errors = error.response &&
                     error.response.data &&
                     error.response.data.errors;
                     console.log(JSON.stringify(errors));
               dispatch({
                     type:REGISTER_FAIL,
              });

              console.log(errors);
              dispatch({
                     type:SET_MESSAGE,
                     payload:errors.email[0]
              });
              if(errors.error){
                     dispatch({
                            type:SET_MESSAGE,
                            payload:errors.error
                     });
              }

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
                     
                     dispatch({
                            type:LOGIN_FAIL,
                     });
                    
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