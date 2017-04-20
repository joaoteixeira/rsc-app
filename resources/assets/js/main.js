/**
 * Config Vue
 */

require('./bootstrap');

import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

/**
 * Config App
 */

const app = new Vue({

    router,

    el: '#app',

    data: {
        currentRoute: window.location.pathname
    },

    created: function () {
        window.Vue = this
    }

}).$mount('#app');

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
});
