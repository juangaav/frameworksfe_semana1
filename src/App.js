import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import { Route, Routes } from 'react-router';
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
        <Routes>
          <Route path="/" element={Home(onLogoClick, onProfileClick, doSearch, search, setToken, token, section, onLogout, doSetCurrentUser)}/>
        </Routes>  
      </div>
    </div>
  );
}

export default App;
