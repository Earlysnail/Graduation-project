import axios from "axios";
import querystring from 'querystring'

export let base = "http://localhost:10000/"
//export let base = "http://140.143.148.207:10000/"

export default(method , url , params={}) => {
    if(method == 'get'){
        
    }
    else if(method == 'post'){
        params = querystring.stringify(params);
    }
    return axios[method](base + url , params);
}