import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Equipe from '../views/Equipe.vue'
import Nouveautes from '../views/Nouveautes.vue'
import Produits from '../views/Produits.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Equipe',
    name: 'Equipe',
    component: Equipe
  },
  {
    path: '/Nouveautes',
    name: 'Nouveautes',
    component: Nouveautes
  },
  {
    path: '/Produits',
    name: 'Produits',
    component: Produits
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
