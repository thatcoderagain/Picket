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
import CartComponent from './views/components/CartComponent';
import Cart from './views/Cart';

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
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
        path: '/CartComponent',
        component: CartComponent
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
        path: '/Cart',
        component: Cart
    }
];

export default new VueRouter({
    routes: routes,
    // mode: 'history',
    linkActiveClass: 'is-active'
});
