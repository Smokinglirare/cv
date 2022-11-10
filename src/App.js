import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalLetter from './pages/PersonalLetter';

function App() {
  return (

    <Router>
    <div className="App">
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/personalLetter" element={<PersonalLetter />} />
    </Routes>


  
    </div>
    </Router>
  );
}

export default App;
