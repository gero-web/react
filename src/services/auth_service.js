import 'axios';
import axios from 'axios';
import API_URL from './API';

function  _storage(data){
       localStorage.setItem('user',JSON.stringify(data));
}

function registration_user(email,password){
       return axios.post(API_URL + 'register/',{
              user:{
                     email,
                     password,
              }
       });
}

function login(email,password){
       return axios.post(API_URL + 'login/',{
             user:{
                    email,
                    password,
              }
                    
       }).then((response)=>{
              _storage(response.data)
       });
}



function logout(){
       localStorage.removeItem('user');
}

const obj = {
       registration_user,
       logout,
       login,
}
export default obj;