import { Link } from "react-router-dom";
import bcat from "../img/bcat.png";
import user from "../img/user.png";
import "../index.css";

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link className="link-button" to="/">
                <img src={bcat} width="30" height="30" class="d-inline-block align-top ms-3" alt=""/>three pics
            </Link>
            <Link className="link-button" to="/profile">
                <img src={user} width="30" height="30" class="align-items-end me-3" alt=""/>
            </Link>
        </nav>
    );
  }
  
  export default Navbar;

