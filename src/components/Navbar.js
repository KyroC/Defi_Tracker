import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <ul> Dashboards
        <li>

            Home

          </li>
        <li>Wallet</li>
        <li>Market</li>
      </ul>
    </div>
  );
}

export default Navbar;
