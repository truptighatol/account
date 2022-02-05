import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Deposit from '../deposit/deposit';
import Withdraw from '../withdraw/withdraw';
import React , { useState, useEffect }from 'react';


const Home = () => {
    const [screen,setScreen] = useState("deposit");
    return (
        <div>
            <Container maxWidth="sm" style={{marginTop:"10px"}}>
                <Button variant="contained" style={{marginRight:"30px"}}onClick ={()=>setScreen("deposit")}>DEPOSIT</Button>
                <Button variant="contained" onClick ={()=>setScreen("withdraw")}>WITHDRAW</Button>
                {screen === 'deposit' && <Deposit/> }
                {screen === 'withdraw' && <Withdraw/>}
            </Container>
        </div>
    )
}
export default Home;