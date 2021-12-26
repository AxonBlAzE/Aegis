import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Aegis</h1>
            <div className="Links">
                <Link to="/">Download Now</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>   
     );
}
 
export default Navbar;