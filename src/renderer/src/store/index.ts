import { createPinia } from 'pinia'
import type { App } from 'vue'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

function setupStore(app: App<Element>) {
  app.use(pinia)
}
export { pinia, setupStore }
