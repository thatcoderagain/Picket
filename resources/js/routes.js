import VueRouter from 'vue-router';

/* Components */
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Logout from './views/auth/Logout';
import EditProfile from './views/EditProfile';
import Upload from './views/Upload';
import Image from './views/Image';
import Photographer from './views/Photographer';
import Home from './views/Home';
import Plans from './views/Plans';
import Images from './views/Images';
import Gallery from './views/Gallery';
import Purchases from './views/Purchases';
import PaymentMode from './views/PaymentMode';
import Transactions from './views/Transactions';
import Receipt from './views/Receipt';
import Resizer from './views/resizer';
import PageNotFound from './views/layouts/404';

// FUTURE SCOPE
// import Subscribe from './views/Subscribe';
// import Subscription from './views/Subscription';

function localStore() {
    return localStorage.picket ? true : false;
}

function guest() {
    if (!localStore()) return true;

    if (JSON.parse(localStorage.picket).auth.user == null) {
        return true;
    }
    else {
        let url='/api/auth/validator';
        axios.post(url)
        .then((response) => {
            let json = response.data;
            console.log(json.valid);
            if (json.valid)
                return false;
        })
        .catch((error) => {
            console.error(error);
            return true;
        });
    }
}

function auth() {
    return !guest();
}

let routes = [
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
        name: 'logout',
        path: '/logout',
        component: Logout,
        beforeEnter: (to, from, next) => {
            auth() ? next() : next(false);
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
        name: 'images',
        path: '/images',
        component: Images
    },
    {
        name: 'search',
        path: '/search/:query',
        component: Images
    },
    {
        name: 'category',
        path: '/category/:category',
        component: Images
    },
    {
        name: 'gallery',
        path: '/gallery',
        component: Gallery,
        beforeEnter: (to, from, next) => {
            auth() ? next() : next(false);
        }
    },
    {
        name: 'purchases',
        path: '/purchases',
        component: Purchases,
        beforeEnter: (to, from, next) => {
            auth() ? next() : next(false);
        }
    },
    {
        name: 'Photographer',
        path: '/photographer/:username',
        component: Photographer
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
    {
        name: 'transactions',
        path: '/transactions',
        component: Transactions,
        beforeEnter: (to, from, next) => {
            auth() ? next() : next(false);
        }
    },
    {
        name: 'transaction',
        path: '/transaction/:id',
        component: Receipt,
        beforeEnter: (to, from, next) => {
            auth() ? next() : next(false);
        }
    },
    {
        name: 'resizer',
        path: '/resizer',
        component: Resizer,
        beforeEnter: (to, from, next) => {
            auth() ? next() : next(false);
        }
    },


    // FUTURE SCOPE
    // {
    //     name: 'subscribe',
    //     path: '/subscribe',
    //     component: Subscribe
    // },
    // {
    //     name: 'subscription',
    //     path: '/subscription',
    //     component: Subscription
    // },
    {
        name: '404',
        path: '*',
        component: PageNotFound
    },
];


export const router = new VueRouter({
    // mode: 'history',
    routes: routes,
    linkActiveClass: 'is-active'
});

// GLOBAL MIDDLEWARE
router.onError((e) => console.error(e.message + " -- FROM ROUTES.JS FILE"));

router.beforeEach((to, from, next) => {
    console.log("Moving from ")
    console.log(from);
    console.log("Moving to ");
    console.log(to);
    next();
});
