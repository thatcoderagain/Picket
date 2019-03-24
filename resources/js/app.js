
import './bootstrap';
import {router} from './routes';
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

function getCookie (key) {
    var name = key + "=";
    var cookies = decodeURIComponent(document.cookie).split('; ');
    for(var i = 0; i <cookies.length; i++) {
        var cookie = cookies[i];
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

console.log(localStorage.picket);
console.log(decodeURIComponent(document.cookie));
console.log(getCookie('XSRF-TOKEN'));
