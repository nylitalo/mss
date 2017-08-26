export const service = (state={service: ''}, action) => {
  switch (action.type) {
    case 'UPDATE_SERVICE':
      return {...state, service: action.payload}
      break;
    default:
      return state
  }
}
