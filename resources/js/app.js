
import './bootstrap';
import router from './routes';
import {store} from './store';
import {mixin} from './mixins';
import {components} from './components';

new Vue({
    el: '#app',
    store: store,
    router: router,
    mixins: [mixin],
    components: components,
});
