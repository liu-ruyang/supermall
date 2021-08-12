import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home').then(m => m.default)
const Cart = () => import('../views/cart/Cart').then(m => m.default)
const Category = () => import('../views/category/Category').then(m => m.default)
const Profile = () => import('../views/profile/Profile').then(m => m.default)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
