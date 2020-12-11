import axios from 'axios'
import _ from 'lodash';

const getNewAxios = axios.create();


getNewAxios.interceptors.response.use(
    async (response) => {

        return response.data
    },
    error => {
        return Promise.reject(error);
    }
);

getNewAxios.interceptors.request.use(async (config) => {

    return config;
    
});


export const httpClient = getNewAxios