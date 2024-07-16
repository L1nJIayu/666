import Home from '~pages/Home.vue'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '000',
        component: () => import('~pages/000.vue')
      }
    ]
  }
]


export {
  routes
}