import Postlist from "../components/Postlist";
import Navbar from "../components/Postlist";
import Searchbar from "../components/Postlist";
import ProfileView from "../components/Postlist";
import Login from "../components/Postlist";

function Home(onLogoClick, onProfileClick, doSearch, search, setToken, token, section, onLogout, doSetCurrentUser) {
    return(
        <div className="Home">
        <Navbar onLogoClick={onLogoClick} onProfileClick={onProfileClick}/>
        {token ? (
          <>
        <Searchbar search={search} doSearch={doSearch}/>
        {section === "postlist"
          ? <Postlist search={search} setToken={setToken} />
          : <ProfileView onLogout={onLogout}/>}
          </>
        ) : (
          <Login setToken={setToken} doSetCurrentUser={doSetCurrentUser}/>
        )}
        </div>
    );
}

export default Home;