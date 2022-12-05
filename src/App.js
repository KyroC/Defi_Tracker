
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Coin from './components/Coin.js';
import Searchbar from './components/Searchbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/coin/:coinName" element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 