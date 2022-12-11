import axios from "axios";
import router from '../routes';

export const user = {
    namespaced: true,
    state: {
        message: null,
        error: false
    },
    mutations: {
        changeMessage(state,data) {
            state.message = data.message;
            state.error = data.error;
        }
    },
    actions: {
        register({commit}, data) {
            axios.post('/api/register', data)
                .then((result) => {
                    commit('changeMessage', {
                        message: result.data.message,
                        error: false
                    })
                })
                .catch((error) => {
                        commit('changeMessage', {
                            message:error.response.data.message,
                            error: true
                        })
                    }
                );
        },
        login({commit}, data) {
            axios.post('/api/login_check', data)
                .then((result) => {
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.token;
                    localStorage.setItem( 'token', JSON.stringify(result.data.token) );
                    router.push('/');
                }).catch((error) => {
                    commit('changeMessage', {
                        message:error.response.data.message,
                        error: true
                    })
                }
            );

        },
        clearError({commit}){
            commit('changeMessage', {
                message: null,
                error: false
            })
        },
        logout() {
            axios.get('/api/logout')
                .then((result) => {
                    console.log(result)
                    localStorage.removeItem( 'token');
                    router.push('/login')
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    getters: {}
}