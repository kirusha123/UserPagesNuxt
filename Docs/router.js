import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _57ce925a = () => interopDefault(import('..\\pages\\activity.vue' /* webpackChunkName: "pages/activity" */))
const _8d77ac3e = () => interopDefault(import('..\\pages\\map.vue' /* webpackChunkName: "pages/map" */))
const _293a16d0 = () => interopDefault(import('..\\pages\\time.vue' /* webpackChunkName: "pages/time" */))
const _514abb17 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/activity",
    component: _57ce925a,
    name: "activity"
  }, {
    path: "/map",
    component: _8d77ac3e,
    name: "map"
  }, {
    path: "/time",
    component: _293a16d0,
    name: "time"
  }, {
    path: "/",
    component: _514abb17,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
