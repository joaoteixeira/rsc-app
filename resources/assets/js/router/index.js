import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const router = new Router({
    routes: [
        {
            path: '/',
            component: function (resolve) {
                require(['../components/dashboard/Dashboard'], resolve)
            }
        },
        {
            path: '/processos',
            component: function (resolve) {
                require(['../components/processo/Index'], resolve)
            }
        },

        {
            path: '/foo',
            component: Foo
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/bar',
            component: Bar
        },
        {
            path: '/example',
            component: function (resolve) {
               require(['../components/Example'], resolve)
             }
        }
    ]
})

function guardRoute (to, from, next) {
    // work-around to get to the Vuex store (as of Vue 2.0)
    const auth = router.app.$options.store.state.auth

    if (!auth.isLoggedIn) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
}

export default router