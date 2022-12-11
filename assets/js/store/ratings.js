import axios from "axios";

export const ratings = {
    namespaced: true,
    state: {
        ratings: null
    },
    mutations: {
        setRatings(state, ratings){
            state.ratings = ratings;
        },
        addRating(state, rating){
            state.ratings.unshift(rating);
        }
    },
    actions: {
        add({commit}, data) {
            axios.post('/api/rate', data)
                .then((result) => {
                    console.log(result.data);
                    commit('addRating', result.data)
                })
                .catch((error) => {
                    console.log(error.response.data)
                    }
                );
        },
        getRatings({ commit }) {
            axios.get('/api/ratings')
                .then((result) => {
                    console.log(result.data)
                    commit('setRatings', result.data)
                })
                .catch((error) => {

                });
        }
    },
    getters: {
        ratings(state) {
            console.log(state.ratings)
            return state.ratings;
        }
    }
}