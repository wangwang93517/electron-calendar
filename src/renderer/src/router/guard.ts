import NProgress from 'nprogress'

function setupRouterGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    NProgress.start()
    console.log('router.beforeEach')
    console.log(to, from)
    next()
  })

  router.afterEach(() => {
    console.log('router.afterEach')
    NProgress.done()
  })
}

export { setupRouterGuard }
