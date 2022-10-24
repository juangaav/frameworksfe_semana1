import './App.css';
import Navbar from './components/Navbar';
import Postlist from './components/Postlist';
import Searchbar from './components/Searchbar';
import ProfileView from './components/ProfileView';
import Login from './components/Login';
import React, {useState} from 'react';

function App() {
  
  const [section, setSection] = useState("postlist");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [search, setSearch] = useState("");
  const [currentUser, setCurrentUser] = useState();

  function onLogoClick(){
    setSection("postlist");  
  }

  function onProfileClick(){  
    setSection("profileview"); 
  }

  function doSearch(text) {
    setSearch(text);
  }

  function onLogout(){
    localStorage.setItem("token", "");
    setToken("");
    setSection("postlist");  
  }

  function doSetCurrentUser(newUserValue){
    setCurrentUser(newUserValue);
  }

  return (
    <div className="App">
      <Navbar onLogoClick={onLogoClick} onProfileClick={onProfileClick}/>
      <div className="container">
        {token ? (
          <>
        <Searchbar search={search} doSearch={doSearch}/>
        {section === "postlist"
          ? <Postlist search={search} setToken={setToken} />
          : <ProfileView onLogout={onLogout} doSetCurrentUser={doSetCurrentUser}/>}
          </>
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
    </div>
  );
}

export default App;
