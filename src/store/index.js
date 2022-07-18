import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken() || {}
  },
  mutations: {
    setTokens(state, payload) {
      setToken(payload)
      state.token = payload
    }
  }
})
