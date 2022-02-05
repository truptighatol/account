import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import denominationCurrency from '../data/denominationCurrency.json'
// @Todo- better way is to get currency from env config
const currencyName = "INR";
export const TransactionReducer = (state = denominationCurrency[currencyName].currency, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            var index = state.findIndex((element) => element.note === action.payload.note);
            state[index].qty = parseInt(state[index].qty) + parseInt(action.payload.qty);
            
            // Sort by note value in desending order 
            state.sort((a, b) => (b.note > a.note) ? 1 : (a.note > b.note) ? -1 : 0)
            return state;
        case 'WITHDRAW':
            // [{note: 200, qty:2}, {note: 500, qty:1}];
            let withdrawNotes = action.payload;
            withdrawNotes.forEach(obj => {
                var index = state.findIndex(element => element.note === obj.note);
                state[index].qty = parseInt(state[index].qty) - parseInt(obj.withdrawQty);
            });

            // Sort by note value in desending order
            state.sort((a, b) => (b.note > a.note) ? 1 : (a.note > b.note) ? -1 : 0)
            return state;
        default:
            return state;
    }
}
