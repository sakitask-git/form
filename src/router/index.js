import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/user/User.vue'
import Admin from '../views/admin/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User',
    component: User,
    children: [
      {
        path: "",
        name: "Index",
        // route level code-splitting
        // this generates a separate chunk (index.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "index" */ "../views/user/Index.vue"),
      },
      {
        path: 'confirm',
        name: 'Confirm',
        // route level code-splitting
        // this generates a separate chunk (confirm.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "confirm" */ '../views/user/Confirm.vue')
      },
      {
        path: "thanks",
        name: "Thanks",
        // route level code-splitting
        // this generates a separate chunk (thanks.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "thanks" */ "../views/user/Thanks.vue"),
      },
    ]
  },
  {
    path: '/admin/',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: "",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (login.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/admin/Login.vue"),
      },
      {
        path: "menu/",
        name: "Menu",
        // route level code-splitting
        // this generates a separate chunk (menu.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "menu" */ "../views/admin/Menu.vue"),
          children: [
            {
              path: "meta",
              name: "Meta",
              // route level code-splitting
              // this generates a separate chunk (meta.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () =>
              import(/* webpackChunkName: "meta" */ "../views/admin/menu/Meta.vue"),
            },
            {
              path: "theme",
              name: "Theme",
              // route level code-splitting
              // this generates a separate chunk (theme.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () =>
              import(/* webpackChunkName: "theme" */ "../views/admin/menu/Theme.vue"),
            },
            {
              path: "layout",
              name: "Layout",
              // route level code-splitting
              // this generates a separate chunk (layout.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () =>
              import(/* webpackChunkName: "theme" */ "../views/admin/menu/Layout.vue"),
            },
            {
              path: "form",
              name: "Form",
              // route level code-splitting
              // this generates a separate chunk (form.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () =>
              import(/* webpackChunkName: "form" */ "../views/admin/menu/Form.vue"),
            },
            {
              path: "mail",
              name: "Mail",
              // route level code-splitting
              // this generates a separate chunk (mail.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () =>
              import(/* webpackChunkName: "mail" */ "../views/admin/menu/Mail.vue"),
            },
            {
              path: "option",
              name: "Option",
              // route level code-splitting
              // this generates a separate chunk (option.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () =>
              import(/* webpackChunkName: "option" */ "../views/admin/menu/Option.vue"),
            },
          ]
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
