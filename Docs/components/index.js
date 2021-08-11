import { wrapFunctional } from './utils'

export { default as Header } from '../..\\components\\Header.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Timer } from '../..\\components\\Timer.vue'

export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyTimer = import('../..\\components\\Timer.vue' /* webpackChunkName: "components/timer" */).then(c => wrapFunctional(c.default || c))
