import * as mutations from './mutations'
import * as actions from './actions'

const state = {
  projects: [],
  projectStatus: undefined,
  bestProduct: undefined,
  bestSquad: undefined
}

const getters = {
  projects: state => state.projects,
  bestProduct: state => state.bestProduct,
  bestSquad: state => state.bestSquad,
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}