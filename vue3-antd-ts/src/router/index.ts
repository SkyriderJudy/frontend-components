import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore';

// 懒加载函数
const loadView = (viewPath: string) => () =>
  import(`../views/${viewPath}.vue`).catch(() => {
    // 可选：处理加载失败的组件
    return { default: () => import('../components/login/login.vue') };
  });

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: loadView('login'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    name: 'Layout',
    component: loadView('layout/index'), // 布局组件
    redirect: '/dashboard',
    children: []
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: loadView('error/NotFound'),
    meta: { title: '404' }
  }
] satisfies RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// const { auth } = useAuthStore();

// router.beforeEach((to, from, next) => {
//   const token = auth.token;
//   console.log('token', token);
//   if (!token) {
//     next('/login');
//   } else if (token && to.path === '/login') {
//     next('/');
//   } else {
//     next();
//   }
// });

export default router;
