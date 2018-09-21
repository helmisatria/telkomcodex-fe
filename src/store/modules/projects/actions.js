// import { router } from "../../../main";
import api from "../../../utils/axios-api";

export const fetchProjects = async ({ commit }) => {
  try {
    const result = await api.get("project");

    console.log('====================================');
    console.log(result);
    console.log('====================================');

    commit("setProjects", result.data);
  } catch (error) {

    console.error(error);
  }
};

export const fetchPerformance = async ({ commit, state }) => {
  try {
    const result = await api.get('project/performance')
    const result2 = await api.get('project/performance')

    commit('setBestProduct', result.data.sort((a, b) => b.performance - a.performance ))
    commit('setBestSquad', result2.data.sort((a, b) => b.performance - a.performance ))
  } catch (error) {
    console.error(error);
  }
}

export const fetchStatus = async ({ commit, state }) => {
  const key = state.projects.map((project) => project.key).join()
  try {
    const result = await api.get('project/status', {
      params: {
        key
      }
    })
    
    commit('setStatus', result.data)
  } catch (error) {
    console.error(error);
     
  }
}
