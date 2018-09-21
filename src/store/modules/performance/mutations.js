// called when fetching products from API
export const setProject = (state, fetchProject) => {  
  state.project = fetchProject
}

export const setMembers = (state, fetchMember) => {
  state.members = fetchMember
}

export const setMemberDetail = (state, fetchMember) => {
  state.memberDetail = {
    ...state.memberDetail,
    ...fetchMember
  }
}
