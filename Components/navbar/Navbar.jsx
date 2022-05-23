import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Algeofleet</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/collections"> Collections</Link>
                    <Link to="/imeiList"> Imei List</Link>
                    <Link to="/vehicleList"> Vehicule List</Link>
                    <Link to="/CollapsTab"> colaps Tab</Link>
                </div>
        </nav>
     );
}
 
export default Navbar;