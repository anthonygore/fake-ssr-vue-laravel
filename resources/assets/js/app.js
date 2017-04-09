import Promise from 'promise-polyfill';

// To add to window
if (!window.Promise) {
    window.Promise = Promise;
}

import Vue from 'vue';

Vue.config.devtools = true;

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
    created() {
        console.log('root created');
    },
    render: h => h(App)
});
