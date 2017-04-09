import Promise from 'promise-polyfill';

if (!window.Promise) {
    window.Promise = Promise;
}

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        name: null,
        birthday: null
    }
});

if (window.__SERVER__) {
    store.replaceState({
        name: '{{ $name }}',
        birthday: '{{ $birthday }}'
    });
} else {
    store.replaceState(JSON.parse(window.__INITIAL_STATE__));
}

import App from './components/App.vue';

const app = new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
