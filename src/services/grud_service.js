import axios from './http_common';
import {authHeader} from './auth_header'

function getAllTask(){
       return axios.get('task/',{headers:authHeader()});
}

function getTask(id){
       return axios.get( `detail_task/${id}`,{headers:authHeader()});
}

function create_task(data){
       return axios.post( `create_task/`,data,{headers:authHeader()});
}

function updateTask(id,data){
       return axios.put( `update_task/${id}`,data,{headers:authHeader()});
}

function delateTask(id){
       return axios.delete( `delate_task/${id}`,{headers:authHeader()});
}


const obj = {
       getAllTask,
       getTask,
       updateTask,
       delateTask,
       create_task,
}

export default obj;