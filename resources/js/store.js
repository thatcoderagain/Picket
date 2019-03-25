import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

// storage: window.localStorage or window.sessionStorage or localForage
const vuexLocalStorage = new VuexPersist({
    key: 'picket',
    storage: window.localStorage,
})

export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    plugins: [vuexLocalStorage.plugin],

    state: {
        guest: true,
        auth: {user: null},
        cart: [],
    },

    mutations: {
        login: (state, payload) => { state.guest = false; state.auth.user = payload.user },
        logout: (state) => { state.guest = true; state.auth.user = null },
        addToCart: (state, payload) => {
            let exists = state.cart.find((image) => {
                return image.id === payload.image.id;
            });
            if (!exists)
                state.cart.push(payload.image);
        },
        removeFromCart: (state, payload) => {
            state.cart = state.cart.filter((image) => {
                return image.id !== payload.image.id;
            });
        }
    },

    actions: {
        login: ({commit}, payload) => commit('login', payload),
        logout: ({commit}) => commit('logout'),
        addToCart: ({commit}, payload) => commit('addToCart', payload),
        removeFromCart: ({commit}, payload) => commit('removeFromCart', payload),
    }
});
