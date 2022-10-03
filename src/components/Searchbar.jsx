function Searchbar(){
    return (
        <nav className="navbar navbar-light bg-light">
        <form className="d-inline-flex ms-3">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
        </nav>
    );
}

export default Searchbar;