import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>

                <li>
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li>
                    <Link to="/schedule" className="nav-link">Schedule</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
