import { BASE_URL } from '../env/config'
import axios from 'axios'

//test@example.com
export const baseService = {

    get: async (url) => {
        const response = await axios.get(BASE_URL + url)
        .then(res => res.data)
            .catch(error => console.log(error))
        return response;
    },
    post: async (url, data) => {
        const response = await axios.post(BASE_URL + url, data)
        .then(res => res.data)
            .catch(error => error.response.status)
            setAuthorizationToken(response.access_token)
        return response;
    }
    
}
export const setAuthorizationToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}