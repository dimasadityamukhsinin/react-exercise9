import React from 'react';
import './App.css';
import { buyCappucino } from './actions/buyCappucino';
import { buyChocolate } from './actions/buyChocolate';
import { buyMocha } from './actions/buyMocha';
import { buyTea } from './actions/buyTea';
import { tambahSaldo, kurangiSaldo } from './actions/saldoActions';
import {connect} from 'react-redux';

function App(props) {
  const mocha = props.mocha;
  const cappucino = props.cappucino;
  const chocolate = props.chocolate;
  const tea = props.tea;
  const saldo = props.saldo;
  
  return (
    <div className="App">
      <h1>TOKO KOPI IMPACT</h1>
      <div className="product">
        <div className="button">
          <div className="total">
            <div onClick={props.kurangiSaldo}>HAPUS</div>
            <div>TOTAL HARGA: Rp {saldo.totalPrice}</div>
          </div>
        </div>
      </div>
      <div className="product">
        <h1>PRODUCTS</h1>
        <div>
          <div className="button" 
            onClick={
              () => { 
                props.handlebuyMocha();
                props.tambahSaldo(mocha.price)
              }
            }
          >
            <div>Coffe Mocha ({mocha.quantity}) Rp {mocha.price}</div>
          </div>
          <div className="button" 
            onClick={
              () => { 
                props.handlebuyCappucino();
                props.tambahSaldo(cappucino.price)
              }
            }
          >
            <div>Cappucino ({cappucino.quantity}) Rp {cappucino.price}</div>
          </div>
          <div className="button" 
            onClick={
              () => { 
                props.handlebuyChocolate();
                props.tambahSaldo(chocolate.price)
              }
            }
          >
            <div>Chocolate ({chocolate.quantity}) Rp {chocolate.price}</div>
          </div>
          <div className="button" 
            onClick={
              () => { 
                props.handlebuyTea();
                props.tambahSaldo(tea.price)
              }
            }
          >
            <div>Tea ({tea.quantity}) Rp {tea.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cappucino : state.cappucinoReducer,
    chocolate : state.chocolateReducer,
    mocha : state.mochaReducer,
    tea : state.teaReducer,
    saldo : state.saldoReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlebuyCappucino : () => dispatch(buyCappucino),
    handlebuyChocolate : () => dispatch(buyChocolate),
    handlebuyMocha : () => dispatch(buyMocha),
    handlebuyTea : () => dispatch(buyTea),
    kurangiSaldo : () => dispatch(kurangiSaldo),
    tambahSaldo : (data) => dispatch(tambahSaldo(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
