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
        path: '/plans',
        component: require('./views/Plans').default
    },
    {
        path: '/upload',
        component: require('./views/Upload').default
    },
    {
        path: '/gallery',
        component: require('./views/Gallery').default
    },
];

export default new VueRouter({
    routes: routes,
    mode: 'history',
    linkActiveClass: 'is-active'
});
