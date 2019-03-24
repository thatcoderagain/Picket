import VueRouter from 'vue-router';

/* Components */
import Home from './views/Home';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import About from './views/About';
import Plans from './views/Plans';
import Upload from './views/Upload';
import Gallery from './views/Gallery';
import Profile from './views/Profile';
import ImageProfile from './views/ImageProfile';
import EditProfile from './views/EditProfile';
import Subscribe from './views/Subscribe';
import Payment from './views/Payment';
import PaymentStatus from './views/PaymentStatus';
import Subscription from './views/Subscription';
import Transactions from './views/Transactions';
import CartModal from './views/components/CartModal';
import Cart from './views/Cart';

let routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/plans',
        component: Plans
    },
    {
        path: '/upload',
        component: Upload
    },
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '/image/:id',
        component: ImageProfile
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/edit-profile',
        component: EditProfile
    },
    {
        path: '/subscribe',
        component: Subscribe
    },
    {
        path: '/CartModal',
        component: CartModal
    },
    {
        path: '/payment',
        component: Payment
    },
    {
        path: '/payment-status',
        component: PaymentStatus
    },
    {
        path: '/subscription',
        component: Subscription
    },
    {
        path: '/transactions',
        component: Transactions
    },
    {
        path: '/Cart',
        component: Cart
    }
];


export const router = new VueRouter({
    // mode: 'history',
    routes: routes,
    linkActiveClass: 'is-active'
});

// GLOBAL MIDDLEWARE
router.beforeEach((to, from, next) => {
    console.log(JSON.parse(localStorage.picket).guest)
    // console.log(to);
    // console.log(from);
    if (JSON.parse(localStorage.picket).guest)
        console.log('Guest');
    else
        console.log('User');
    next();
});



router.onError(err => console.error('Error - ' + err.message));
