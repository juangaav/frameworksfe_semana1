import bcat from "../img/bcat.png";
import user from "../img/user.png";
import "../index.css";

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <button
                type="button"
                className="link-button"
                onClick={() => this.setState({ showSomething: true })}
                >
                <img src={bcat} width="30" height="30" class="d-inline-block align-top ms-3" alt=""/>three pics
            </button>    
            <img src={user} width="30" height="30" class="align-items-end me-3" alt=""/>
        </nav>
    );
  }
  
  export default Navbar;

