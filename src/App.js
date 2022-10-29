import Home from './screens/Home';
import Login from './components/Login'
import ProfileViewScreen from './screens/ProfileViewScreen';

import { Route, Routes, useNavigate } from 'react-router';
import React, {useEffect, useState} from 'react';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [search, setSearch] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  function doSearch(text) {
    setSearch(text);
  }

  function onLogout(){
    localStorage.setItem("token", "");
    setToken("");
  }

  function doSetCurrentUser(newUserValue){
    setCurrentUser(newUserValue);
  }

  useEffect(() => {
    if(!token){
      navigate("/login");
    }else{
      navigate("/");
    }
  }, [token]);

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={Home(doSearch, search, setToken, currentUser)}/>
          <Route path="/login" element={<Login setToken={setToken} doSetCurrentUser={doSetCurrentUser}/>}/>
          <Route path="/profile" element={ProfileViewScreen(doSetCurrentUser, onLogout, currentUser)}/>        
        </Routes>  
      </div>
    </div>
  );
}

export default App;
