import { defineStore } from 'pinia'

interface UserState {
  token?: string
}

const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: undefined
  }),
  getters: {
    getToken(state): string {
      console.log('getToken', state.token)
      return state.token
    }
  },
  actions: {
    setToken(info: string | undefined) {
      console.log('setToken', info)
      this.token = info ? info : ''
    }
  },
  persist: {
    key: 'UserPiniaStore', //存储名称
    storage: localStorage, // 存储方式
    paths: null // ['username', 'like', 'obj'] //指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state
  }
})

export default useUserStore
