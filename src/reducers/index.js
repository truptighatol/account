import { TransactionReducer } from './transaction.js';
import { combineReducers } from 'redux';
const allReducers = combineReducers({
    transactionReducer : TransactionReducer
})

export default allReducers;