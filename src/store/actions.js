import router   from '../router'
import axios from '../api/index'

export default {
    login ({commit}, payload) {
        console.log("login!!");
        return axios('post','login',payload);
    },
    register ({commit}, payload) {
        console.log("register!!");
        return axios('post','register',payload);
    },
    deleteUser ({commit}, payload) {
     
        console.log("deleteuser!!");
        return axios('post','delete',payload);    
    }
}
