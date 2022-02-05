import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './component/home/home';
import Deposit from './component/deposit/deposit';
import Withdraw from './component/withdraw/withdraw';
import { createStore } from 'redux';
import allReducers from './reducers';
import './App.css';


const store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <header>
            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/deposit" exact element={<Deposit/>} />
              <Route path="/withdraw" exact element={<Withdraw/>} />
            </Routes>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
