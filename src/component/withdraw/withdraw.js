import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, FormControl } from '@mui/material';
import denominationCurrency from '../../data/denominationCurrency.json'
import { withdraw } from '../../actions'

const Withdraw = () => {
    const [amount, setAmount] = useState(null);
    const [infoMessage, setInfoMessage] = useState(null);
    const [withdrawResult, setWithdrawResult] = useState(null);
    const dispatch = useDispatch();
    const denomination = "INR";
    const denominationSymbol = denominationCurrency[denomination].symbol;
    const noteList = useSelector(state => state.transactionReducer) || [];
    const handleChange = (prop) => (event) => {
        setAmount(event.target.value);
    }
    const onWithdrawClick = useCallback(() => {
        setWithdrawResult(null);
        setInfoMessage(null);
        if (amount <= getTotalCash()) {
            let result = calcuateLeastCurrency(amount);
            if (result) {
                dispatch(withdraw(result))
                setWithdrawResult(result);
            }

        } else {
            setInfoMessage("Insufficient balance!")
        }
        // dispatch(withdraw(amount))
    },[amount]);

    const getTotalCash = function() {
        let total = 0;
        noteList.forEach(e => total = total + (e.note * e.qty));
        return total;
    }

    const calcuateLeastCurrency = function (amount) {
        let notes = JSON.parse(JSON.stringify(noteList.filter(e => e.qty >= 1)));

        // Count notes
        for (let i = 0; i < notes.length; i++) {
            if (amount >= notes[i].note) {
                 let expectedNoteCount = Math.floor(amount / notes[i].note);
                 if (expectedNoteCount <= notes[i].qty) {
                    notes[i]['withdrawQty'] = expectedNoteCount;
                 } else {
                    // Compromise note count to max availability
                    notes[i]['withdrawQty'] = notes[i].qty;
                 }
                 amount = amount - notes[i]['withdrawQty'] * notes[i].note;
            }
        }

        if (amount > 0) {
            setInfoMessage("Entered amount can't be withdraw due to unavailability of notes")
            return  false;
        }

        return notes;
    }

    return (
        <div>
            <h2>WITHDRAW</h2>
            <div>
                <FormControl >
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <TextField
                            label="Withdraw amount"
                            variant="outlined"
                            name="amount"
                            type="number"
                            required
                            onChange={handleChange("amount")}
                            style={{marginRight:'10px'}}
                            />
                        <Button variant="contained" onClick={onWithdrawClick}>WITHDRAW</Button>
                    </div>
                </FormControl>
            </div>
            <div>
                <h3>Denomination(Currency Notes)</h3>
                <ul>
                    {withdrawResult && withdrawResult.map(e =>
                        e.withdrawQty > 0 ? <li> {denominationSymbol}  {e.note} * {e.withdrawQty} = {e.note * e.withdrawQty}</li> : '')
                    }
                </ul>
                <span>
                    {infoMessage}
                </span>
            </div>
        </div>
    )
}

export default Withdraw;