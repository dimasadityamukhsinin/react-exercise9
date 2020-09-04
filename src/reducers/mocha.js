const mocha = {
  quantity: 20,
  price: 50000
}

const mochaReducer = (state = mocha, action) => {
  // Condition based Action
  if (action.type === 'BELI_MOCHA') {
    const newState = {
      ...state,
      quantity: state.quantity - 1,
    }
    return newState;
  }
  return state;
}

export default mochaReducer;