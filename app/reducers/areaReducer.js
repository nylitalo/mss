export const area = (
  state = {
  area: 0
  }, action ) => {
  switch (action.type) {
    case 'UPDATE_AREA':
      return {...state, area: action.payload}
    default:
      return state
  }
}
