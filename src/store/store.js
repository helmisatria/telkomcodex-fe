import Vue from 'vue'
import Vuex from 'vuex'

// Modules
// import products from './modules/products/products'
// import username from './modules/username/username'
// import category from './modules/category/category'
// import history from './modules/history/history'
// import historyDetail from './modules/historyDetail/historyDetail'
// import listLazada from './modules/listLazada/listLazada'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // products
  },
  state: {
    isLoading: false,
    isError: undefined,
    isMinimized: false,
    route: undefined
    // alert: {
    //   actions: '',
    //   data: undefined,
    //   title: '',
    //   subtitle: '',
    //   status: false,
    //   button: {
    //     message: '',
    //     color: ''
    //   }
    // },
    // miniAlert: {
    //   message: '',
    //   status: false
    // },
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