
window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
} catch (e) {}

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let AUTH = JSON.parse(localStorage.picket).auth;
if (AUTH.user != null) {
    window.axios.defaults.headers.common['Authorization'] = AUTH.token_type + ' ' + AUTH.access_token;
}

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import moment from 'moment';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'

window.Vue = Vue;
window.EventBus = new Vue();

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

