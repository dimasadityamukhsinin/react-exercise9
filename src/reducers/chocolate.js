const chocolate = {
    quantity: 10,
    price: 25000
  }
  
  const chocolateReducer = (state = chocolate, action) => {
    // Condition based Action
    if (action.type === 'BELI_CHOCOLATE') {
      const newState = {
        ...state,
        quantity: state.quantity - 1,
      }
      return newState;
    }
    return state;
  }
  
  export default chocolateReducer;