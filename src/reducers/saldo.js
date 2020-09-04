const saldo = {
    totalPrice: 0,
}
  const saldoReducer = (state = saldo, action) => {
    // Condition based Action
    if (action.type === 'TAMBAH_SALDO') {
        console.log(action.payload.price);
        const newState = {
            totalPrice: state.totalPrice + action.payload,
        }
        return newState;
    }else if(action.type === 'KURANGI_SALDO') {
        const newState = {
            totalPrice: 0,
        }
        return newState;
    }
    return state;
  }
  
export default saldoReducer;