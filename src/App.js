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

function App() {
  return (
    <div className="App">
      <BrowserRouter>

{/* <ToastContainer /> */}

<Routes>
  <Route exact path="/" element={ <Landing />} />
  <Route path="Dark_Mood" element={<Dark_Mood />} />
 

  



</Routes>

</BrowserRouter>
     


    </div>
  );
}

export default App;
