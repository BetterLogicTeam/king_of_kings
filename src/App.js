import logo from './logo.svg';
import './App.css';
import Landing from "./Components/Landing/Landing"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Dark_Mood from './Components/Dark_mood/Dark_Mood';
import { loadWeb3 } from './Components/apis/api';
import { useEffect, useState } from 'react';
import Web3 from "web3";
import { loadWeb4 } from './Components/apis/api2';
// import

function App() {
  
  const [connect, setconnect] = useState(false)
  const [check_Chain_id, setcheck_Chain_id] = useState("")




  





  return (
    <div className="App">
      <BrowserRouter>

{/* <ToastContainer /> */}

<Routes>
  <Route exact path="/" element={ <Landing />} connect={connect} />
  <Route path="Dark_Mood" element={<Dark_Mood />} connect={connect} />
 

  



</Routes>

</BrowserRouter>
     


    </div>
  );
}

export default App;
