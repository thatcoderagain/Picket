import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Home').default
    },
    {
        path: '/login',
        component: require('./views/auth/Login').default
    },
    {
        path: '/register',
        component: require('./views/auth/Register').default
    },
    {
        path: '/about',
        component: require('./views/About').default
    },
    {
        path: '/categories',
        component: require('./views/Categories').default
    },

];

export default new VueRouter({
    routes: routes,
    mode: 'history',
    linkActiveClass: 'is-active'
});
