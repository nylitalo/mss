export default(state = 0, payload) => {
  const basePrice = 100
  let payloadPrice = 0

  switch (payload) {
    case 'update':
      return state + payload
    default:
      return state
  }
}
