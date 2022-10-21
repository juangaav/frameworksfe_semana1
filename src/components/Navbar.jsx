import bcat from "../img/bcat.png";
import user from "../img/user.png";
import "../index.css";

function Navbar({onLogoClick, onProfileClick}) {
    return (
        <nav className="navbar navbar-light bg-light">
            <button
                type="button"
                className="link-button"
                onClick={
                    () => { onLogoClick(); }
                }>
                <img src={bcat} width="30" height="30" class="d-inline-block align-top ms-3" alt=""/>three pics
            </button>
            <button
                type="button"
                className="link-button"
                onClick={
                    () => { onProfileClick(); }
                }>
                <img src={user} width="30" height="30" class="align-items-end me-3" alt=""/>
            </button>        
            
        </nav>
    );
  }
  
  export default Navbar;

