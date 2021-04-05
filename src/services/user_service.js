import axios from 'axios';
import API_URL from './API';
import {authHeader} from './auth_header'



 function updateProfile(email,password){
       return axios.put(API_URL + 'profile/',{
             user:{
                    email,
                    password,
             }
       },
       {
              headers:authHeader()
       });
}

export default updateProfile;
