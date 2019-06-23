import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Menu from './views/Menu'
import Signin from './views/Signin'
import Join from './views/Join'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: Signin
        },
        {
            path: '/join',
            name: 'join',
            component: Join
        }
    ]
})
