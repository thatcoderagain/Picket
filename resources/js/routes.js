import VueRouter from 'vue-router';

/* Components */
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Upload from './views/Upload';
import Photographer from './views/Photographer';

import Home from './views/Home';
import Plans from './views/Plans';
import Gallery from './views/Gallery';
import ImageProfile from './views/ImageProfile';
import EditProfile from './views/EditProfile';
import Subscribe from './views/Subscribe';
import Payment from './views/Payment';
import PaymentStatus from './views/PaymentStatus';
import Subscription from './views/Subscription';
import Transactions from './views/Transactions';
import PaymentMethod from './views/PaymentMethod';
// import PurchasedImages from './views/PurchasedImages';

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
        name: 'Photographer',
        path: '/Photographer',
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
        name: 'gallery',
        path: '/gallery',
        component: Gallery
    },
    {
        name: 'image',
        path: '/image/:id',
        component: ImageProfile
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
    {
        name: 'payment',
        path: '/payment',
        component: Payment
    },
    {
        name: 'payment-status',
        path: '/payment-status',
        component: PaymentStatus
    },
    {
        name: 'PaymentMethod',
        path: '/PaymentMethod',
        component: PaymentMethod
    },
    // {
    //     name: 'PurchasedImages',
    //     path: '/PurchasedImages',
    //     component: PurchasedImages
    // }
];


export const router = new VueRouter({
    // mode: 'history',
    routes: routes,
    linkActiveClass: 'is-active'
});

// GLOBAL MIDDLEWARE
router.onError((e) => console.error(e.message));

// router.beforeEach((to, from, next) => {
//     next();
// });
