import axios from "axios";
import API_URL from './API';
export default axios.create({
       baseURL: API_URL,
       headers: {
         
       }
     });