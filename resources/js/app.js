
import './bootstrap';
import router from './routes';
import {store} from './store';
import {mixin} from './mixins';

new Vue({
    el: '#app',
    router: router,
    store: store,
    mixins: [mixin],
});
