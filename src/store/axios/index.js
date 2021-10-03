import axios from "axios"
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

let postApis = (url, data) =>{
   return axios.post(url, data)
}

let getApis = (url, data) =>{
    return axios.get(url, data)
 }

export {
    postApis,
    getApis
}