import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <ul> Dashboards
        <li><Link to="/">Home</Link></li>
        <li><Link to="/wallet">Wallet</Link></li>
        <li><Link to="/market">Market</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
