// called when fetching products from API
export const setEvents = (state, fetchEvents) => {  
  state.events = fetchEvents
}

export const setNewEvent = (state, data) => {
  state.newEvent = {
    ...state.newEvent,
    ...data
  }
}

export const createNewEvent = (state) => {
  state.newEvent = {
    ...state.newEvent,
    notes: ''
  }
}
