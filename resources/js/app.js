
import './bootstrap';
import router from './routes';
import {store} from './store';


new Vue({
    el: '#app',
    router: router,
    store: store,
});
