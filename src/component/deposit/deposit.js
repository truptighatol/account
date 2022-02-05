import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Select, TextField, Button, MenuItem, FormControl, InputLabel } from '@mui/material';
import denominationCurrency from '../../data/denominationCurrency.json'
import { deposit } from '../../actions'

const Deposit = () => {
    const dispatch = useDispatch();
    // @Todo- better to get this from env config
    const denomination = "INR";
    const denominationSymbol = denominationCurrency[denomination].symbol;
    const [values, setVlaues] = useState({
        "note": '',
        "quantity": ''
    });
    const noteList = useSelector(state => state.transactionReducer) || [];
    const handleChange = (prop) => (event) => {
        setVlaues({ ...values, [prop]: event.target.value });
    }
    const onAddClick = (e) => {
        console.log(values);
        if (values.note && values.qty) {
            dispatch(deposit(values));
            setVlaues({
                "note": '',
                "qty": ''
            });
        } else {
            // @Todo - Add validations
            console.log("Please fill all mandatory fields value")
        }
    }
    return (
        <div>
            <h2>DEPOSIT</h2>
            <div>
                <FormControl>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <InputLabel id="denomination-lable">Denomination Currency</InputLabel>
                            <Select
                                labelId="denomination-lable"
                                id="denomination-select"
                                label="Denomination Currency"
                                name="note"
                                required
                                onChange={handleChange("note")}
                                value={values.note}
                                style={{width:'300px', marginRight:'10px'}}
                            >
                                {
                                    denominationCurrency[denomination].currency.map(e => {
                                        return <MenuItem value={e.note}>{denominationSymbol} {e.note}</MenuItem>
                                    })
                                }
                            </Select>
                        <TextField
                            id="qty"
                            label="Quantity"
                            variant="outlined"
                            name="qty"
                            type="number"
                            required
                            value={values.qty}
                            onChange={handleChange("qty")} 
                            style={{marginRight:'10px'}}/>
                        <Button variant="contained" onClick={onAddClick}>ADD</Button>
                    </div>
                </FormControl>
            </div>
            <div>
                <h3>Available Denomination(Currency Notes)</h3>
                <ul>
                    { noteList.map(e =>
                        e.qty > 0 ? <li> {denominationSymbol}  {e.note} * {e.qty} = {e.note * e.qty}</li> : '')
                    }
                </ul>
            </div>
        </div>
    )
}

export default Deposit;