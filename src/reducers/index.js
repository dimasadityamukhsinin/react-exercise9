import { combineReducers } from 'redux';

import mochaReducer from './mocha';
import cappucinoReducer from './cappucino';
import chocolateReducer from './chocolate';
import teaReducer from './tea';
import saldoReducer from './saldo';
// Import all reducer

// Combine all reducer
const rootReducer = combineReducers({
    mochaReducer: mochaReducer,
    cappucinoReducer: cappucinoReducer,
    chocolateReducer: chocolateReducer,
    teaReducer: teaReducer,
    saldoReducer: saldoReducer
})

export default rootReducer;