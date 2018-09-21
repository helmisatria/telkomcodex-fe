// import { router } from "../../../main";
import api from "../../../utils/axios-api";
import moment from 'moment'
export const fetchEvents = async ({ commit }) => {
  try {
    const result = await api.get(`calendar/list/2018`);

    commit("setEvents", result.data);
  } catch (error) {
    console.error(error);
  }
};

export const setNewEvent = ({ commit }, data) => {  
  commit('setNewEvent', data)
}

export const createNewEvent = async ({ commit, dispatch, state }) => {
  
  try {
    await api.post('calendar', {
      notes: state.newEvent.notes,
      location: state.newEvent.location,
      dueDate: new Date(state.newEvent.dueDate).getTime()
    })

    dispatch('fetchEvents')

    commit('createNewEvent')
  } catch (error) {
    console.error(error);
  }
}
