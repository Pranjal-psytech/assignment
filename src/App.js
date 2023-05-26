import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './page/Home';
import Refer from './page/Refer';
import Navbar from './components/navbar';
import Path from './components/path';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<><Navbar/><Path location='UI/UX > Refer & Earn'/><Home /></>} />
        <Route exact path="/refer" element={<><Navbar/> <Path location='UI/UX > Refer & Earn > Freinds Referred ' />< Refer/></>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
