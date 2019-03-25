import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
    key: 'picket',
    storage: window.localStorage, // window.localStorage or window.sessionStorage or localForage
})

export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [vuexLocalStorage.plugin],

    state: {
        guest: true,
        auth: {user: null},
    },
    mutations: {
        // login: (state, payload) => { state.guest = false; state.auth.user = payload.user },
        login: (state) => state.guest = false,
        logout: (state) => state.guest = true,
    },
    actions: {
        login: ({commit}) => commit('login'),
        logout: ({commit}) => commit('logout'),
    }
});
