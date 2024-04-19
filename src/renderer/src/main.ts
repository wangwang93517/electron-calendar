import './assets/main.less'

import { createApp } from 'vue'
import { setupStore } from './store'
import { setupRouter, router } from './router'
import { setupRouterGuard } from './router/guard'
import { setupErrorHandle } from './utils/errorHandle'
import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)
  // 配置 store
  setupStore(app)
  // 配置路由
  setupRouter(app)
  // 路由守卫
  setupRouterGuard(router)
  // 配置全局错误处理
  setupErrorHandle(app)

  app.mount('#app')
}

bootstrap()
