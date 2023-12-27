import axios from "axios";
import {store} from '../redux/store';
import {URI, URI2} from './constants';


axios.interceptors.request.use((config) => {

    const loginUrl = URI + "/UserManagement/Login";
    const logoutUrl = URI + "/UserManagement/Logout";

    if(config.url !== loginUrl && !config.url.startsWith(logoutUrl)  && (config.url.startsWith(URI) ||config.url.startsWith(URI2))){

        const state = store.getState();
        config.headers.LoginSessionId = state.auth.loginSessionId;
        config.headers.UserId = state.auth.userId;
    
    }
    
    return config;
})