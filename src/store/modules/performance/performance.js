import * as mutations from './mutations'
import * as actions from './actions'

const state = {
  project: {
    description: '',
    end: new Date(),
    key: '',
    sprint: '',
    stakeholder: '',
    start: new Date(),
  },
  members: [],
  bestTalent: [],
  memberDetail: undefined
}

const getters = {
  project: state => state.project,
  members: state => state.members,
  bestTalent: state => state.bestTalent,
  memberDetail: state => state.memberDetail,
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}