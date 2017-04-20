
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

Vue.use(VueResource);

/**
 * Config App
 */

new Vue({

    el: '#dashboard',

    data: {
        //currentRoute: window.location.pathname,

        indicadores: {
            total: 0,
            abertos: 0,
        }
    },

    created: function() {
        this.indicadorShow();
    },

    methods: {
        indicadorShow: function () {

            var self = this;

            this.$http.get('/api/indicadores').then(response => {
                var data = response.data,
                    ind = self.indicadores;

                console.log(data);

                ind.total = data.total;
                ind.abertos = data.abertos;



            }, response => {
                // error callback
                console.log('Error');
            });
        }
    }

});