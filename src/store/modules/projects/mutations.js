// called when fetching products from API
export const setProjects = (state, fetchProjects) => {  
  state.projects = fetchProjects
}

export const setBestProduct = (state, fetchProjectStatus) => {
  state.bestProduct = fetchProjectStatus
}

export const setBestSquad = (state, fetchProjectStatus) => {
  state.bestSquad = fetchProjectStatus
}

export const setStatus = (state, fetchStatus) => {
  state.projectStatus = fetchStatus
}
