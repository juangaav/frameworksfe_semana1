import Postlist from "../components/Postlist";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

function Home(doSearch, search, setToken) {
    return(
        <div className="Home">
          <Navbar/>
          <Searchbar search={search} doSearch={doSearch}/>
          <Postlist search={search} setToken={setToken} />
        </div>
    );
}

export default Home;