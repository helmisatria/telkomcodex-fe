import * as mutations from './mutations'
import * as actions from './actions'

const state = {
  events: [],
  newEvent: {
    notes: '',
    dueDate: '',
    location: 'Bandung'
  }
}

const getters = {
  events: state => state.events,
  newEvent: state => state.newEvent,
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}