import VueRouter from 'vue-router';

/* Components */
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import EditProfile from './views/EditProfile';
import Upload from './views/Upload';


// TODO

import Image from './views/Image';
import Photographer from './views/Photographer';
import Home from './views/Home';
import Plans from './views/Plans';
import Gallery from './views/Gallery';
import PaymentMode from './views/PaymentMode';


import Subscribe from './views/Subscribe';
import Subscription from './views/Subscription';
import Transactions from './views/Transactions';

function localStore() {
    return localStorage.picket ? true : false;
}

function guest() {
    if (!localStore()) return true;

    if (JSON.parse(localStorage.picket).guest)
        return true;
    else
        return false;
}

function auth() {
    return !guest();
}

let routes = [
    {
        name: 'login',
        path: '/login',
        component: Login,
        beforeEnter: (to, from, next) => {
            guest() ? next() : next(false);
        }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        beforeEnter: (to, from, next) => {
            guest() ? next() : next(false);
        }
    },
    {
        name: 'edit-profile',
        path: '/edit-profile',
        component: EditProfile,
        beforeEnter: (to, from, next) => {
            auth() ? next() : next(false);
        }
    },
    {
        name: 'upload',
        path: '/upload',
        component: Upload,
        beforeEnter: (to, from, next) => {
            auth() ? next() : next(false);
        }
    },
    {
        name: 'image',
        path: '/image/:id',
        component: Image
    },
    {
        name: 'Photographer',
        path: '/photographer/:username',
        component: Photographer
    },
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'plans',
        path: '/plans',
        component: Plans
    },
    {
        name: 'PaymentMode',
        path: '/payment-mode',
        component: PaymentMode,
        beforeEnter: (to, from, next) => {
            auth() ? next() : next({path: '/login'});
        },
        afterEnter: (to, from, next) => {
            auth() ? next() : next(false);
            this.cartModal({showCartModal: false});
        }
    },
    // TODO

    {
        name: 'gallery',
        path: '/gallery',
        component: Gallery
    },
    {
        name: 'subscribe',
        path: '/subscribe',
        component: Subscribe
    },
    {
        name: 'subscription',
        path: '/subscription',
        component: Subscription
    },
    {
        name: 'transactions',
        path: '/transactions',
        component: Transactions
    },
];


export const router = new VueRouter({
    // mode: 'history',
    routes: routes,
    linkActiveClass: 'is-active'
});

// GLOBAL MIDDLEWARE
router.onError((e) => console.error(e.message));

router.beforeEach((to, from, next) => {
    next();
});
