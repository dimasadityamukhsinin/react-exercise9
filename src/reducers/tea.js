const tea = {
    quantity: 5,
    price: 30000
  }
  
  const teaReducer = (state = tea, action) => {
    // Condition based Action
    if (action.type === 'BELI_TEA') {
      const newState = {
        ...state,
        quantity: state.quantity - 1,
      }
      return newState;
    }
    return state;
  }
  
  export default teaReducer;