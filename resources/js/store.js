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
        auth: {user: null},
        cart: [],
        discount: 5,
        showCartModal: false,
    },

    getters: {
        cartCount: (state) => { return state.cart.length },
        bagTotal: (state) => {
            let amount = 0.0;
            state.cart.forEach((image) => {
                let resolutions = image.resolution.split(' x ');
                amount += resolutions[0]*resolutions[1]/102400;
            });
            return String(amount);
        },
        grandTotal: (state, getters) => {
            return getters.bagTotal - ((getters.bagTotal*state.discount)/100);
        }
    },

    mutations: {
        login: (state, payload) => {
            state.auth.token_type = payload.token_type,
            state.auth.access_token = payload.access_token,
            state.auth.expires_in = payload.expires_in,
            state.auth.user = payload.user
        },
        logout: (state) => { state.auth = {user: null } },
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
        },
        cartModal: (state, payload) => { state.showCartModal = payload.showCartModal },
        clearCart: (state) => { state.cart = [] },
    },

    actions: {
        login: ({commit}, payload) => commit('login', payload),
        logout: ({commit}) => commit('logout'),
        addToCart: ({commit}, payload) => commit('addToCart', payload),
        removeFromCart: ({commit}, payload) => commit('removeFromCart', payload),
        cartModal: ({commit}, payload) => commit('cartModal', payload),
        clearCart: ({commit}) => commit('clearCart'),
    }
});
