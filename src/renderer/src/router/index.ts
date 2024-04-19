import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const constantRoutes = [
  {
    path: '',
    component: () => import('@renderer/views/home/index.vue')
  },
  {
    path: '/test',
    component: () => import('@renderer/views/test/index.vue')
  }
]

// 创建一个可以被 Vue 应用程序使用的路由实例
const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE_PATH),
  // 应该添加到路由的初始路由列表。
  routes: constantRoutes as unknown as RouteRecordRaw[],
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

function setupRouter(app: App<Element>) {
  app.use(router)
}
export { router, setupRouter }
