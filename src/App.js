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
// import

function App() {
  
  const [connect, setconnect] = useState(false)



  const connectWallte=async()=>{
    try{

      let acc = await loadWeb3();
      // console.log("ACC=",acc)
      if (acc == "No Wallet") {
        setconnect(false)
          // toas("No Wallet")
      }
      else if (acc == "Wrong Network") {
          // setBtTxt("Wrong Network")
        setconnect(false)

      } else {
        setconnect(true)

          let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
          // setBtTxt(myAcc);

      }

    }catch(e){
      console.log("Error while Connect Walte",e);
    }
  }

  useEffect(() => {
    setInterval(() => {
      connectWallte();
    }, 1000);
}, []);


  





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
