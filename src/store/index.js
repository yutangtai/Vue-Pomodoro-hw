import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sound: 'Freedom.mp3',
    sound1: 'Attention.mp3',
    list: [],
    finished: [],
    collapseNum: 0
  },
  mutations: {
    playWorkSound (state, data) {
      state.sound = data
    },
    playBreakSound (state, data) {
      state.sound1 = data
    },
    addList (state, data) {
      const num = Math.floor(Date.now())
      state.list.push({
        name: data,
        edit: false,
        model: data,
        collapseindex: num
      })
      console.log(state.list)
    },
    newEdit (state, data) {
      state.list.model = data
    }
  },
  getters: {
    list (state) {
      return state.list
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      key: 'pomodoro'
    })
  ]
})
