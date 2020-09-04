const cappucino = {
    quantity: 10,
    price: 35000
  }
  
  const cappucinoReducer = (state = cappucino, action) => {
    // Condition based Action
    if (action.type === 'BELI_CAPPUCINO') {
      const newState = {
        ...state,
        quantity: state.quantity - 1,
      }
      return newState;
    }
    return state;
  }
  
  export default cappucinoReducer;