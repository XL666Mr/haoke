import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken() || {},
    Username: ''
  },
  mutations: {
    setToken (state, val) {
      state.token = val
      setToken(val)
    },
    setName (state, val) {
      state.Username = val
    }
  }
})
