import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/SignIn.vue'
import auth from './auth'

Vue.use(Router)

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/signin',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ]
})
