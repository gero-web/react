import axios from "axios";
import './API'
export default axios.create({
       baseURL: API_URL,
       headers: {
         
       }
     });