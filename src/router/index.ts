import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import BiddingInfo from '../views/BiddingInfo.vue'
import CheckIn from '../views/CheckIn.vue'
import Bidding from '../views/Bidding.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/auth', name: 'auth', component: Auth },
    { path: '/bidding-info', name: 'bidding-info', component: BiddingInfo },
    { path: '/check-in', name: 'check-in', component: CheckIn },
    { path: '/bidding', name: 'bidding', component: Bidding },
    { path: '/contact', name: 'contact', component: Contact },
  ],
})

export default router