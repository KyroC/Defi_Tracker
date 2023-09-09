
import Navbar from './components/Navbar.js';
import Markets from './components/Markets.js';
import Coin from './components/Coin.js';
import Dashboard from './components/Dashboard.js'
import Searchbar from './components/Searchbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/coin/:coinName" element={<Coin />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
 