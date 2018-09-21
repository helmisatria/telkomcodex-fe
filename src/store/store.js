import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import projects from './modules/projects/projects'
import performance from './modules/performance/performance'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    projects,
    performance
  },
  state: {
    isLoading: false,
    isError: undefined,
    isMinimized: false,
    route: undefined
  },
  getters: {
    isLoading: state => state.isLoading,
    isError: state => state.isError,
    // isMinimized: state => state.isMinimized,
    route: state => state.route,
  },
  mutations: {
    // toggleMinimize(state) {
    //   state.isMinimized = !state.isMinimized;
    // },
    toggleLoading(state) {
      state.isLoading = !state.isLoading
    }
  },
  actions: {
    toggleMinimize: ({ commit }) => {
      commit("toggleMinimize");
    },
    toggleLoading: ({ commit }) => {
      commit("toggleLoading");
    },
  }
});

export default store