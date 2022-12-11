/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import Vue from 'vue';

import Routes from './js/routes.js';
import {Vuelidate} from "vuelidate";

Vue.use(Vuelidate);
import App from './js/views/App';
import { store } from './js/store/store'
import axios from "axios";

window.axios = axios;

let token = JSON.parse( localStorage.getItem('token') );
if( token ){
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
    store,
    beforeCreate() {
        axios.interceptors.response.use(function (response) {
            return response;
        },  (error) => {
            console.log(error.response.status);
            console.log(token);
            if(error.response.status == 401 && token){
                localStorage.removeItem('token')
                window.location.assign(window.location.origin + '/login' );
            }
            return Promise.reject(error);
        });
    }
});

export default app;