import { App } from 'vue'

function formatComponentName(vm: any) {
  if (vm.$root === vm) {
    return {
      name: 'root',
      path: 'root'
    }
  }

  const options = vm.$options as any
  if (!options) {
    return {
      name: 'anonymous',
      path: 'anonymous'
    }
  }
  const name = options.name || options._componentTag
  return {
    name: name,
    path: options.__file
  }
}
function vueErrorHandler(err: unknown, vm: any, info: string) {
  const { name, path } = formatComponentName(vm)
  console.error('vueErrorHandler', name, path, info, window.location.href, err)
}

export function scriptErrorHandler(
  event: Event | string,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: Error
) {
  if (event === 'Script error.' && !source) {
    return false
  }
  const errorInfo: Partial<ErrorLogInfo> = {}
  colno = colno || (window.event && (window.event as any).errorCharacter) || 0
  errorInfo.message = event as string
  if (error?.stack) {
    errorInfo.stack = error.stack
  } else {
    errorInfo.stack = ''
  }
  const name = source ? source.substr(source.lastIndexOf('/') + 1) : 'script'
  console.log('scriptErrorHandler', name, source, lineno, colno, window.location.href, errorInfo)
}
function setupErrorHandle(app: App) {
  // Vue exception monitoring;
  app.config.errorHandler = vueErrorHandler

  // script error
  window.onerror = scriptErrorHandler
}
export { setupErrorHandle }
