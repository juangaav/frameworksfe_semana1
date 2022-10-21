import './App.css';
import Navbar from './components/Navbar';
import Postlist from './components/Postlist';
import Searchbar from './components/Searchbar';
import ProfileView from './components/ProfileView';
import viejo from "./img/viejo.jpg";
import React, {useState} from 'react';

function App() {
  const initialPosts = [{
    age: "3min ago",
    img: {viejo},
    author: "@thedogist",
    description: "Post from dog photographer",
    likes: 100,
    comments: 300
  },
  {
    age: "15h ago",
    img: {viejo},
    author: "@food",
    description: "Food post from the famous food account",
    likes: 200,
    comments: 100
  },
  {
    age: "2y ago",
    img: {viejo},
    author: "@singer",
    description: "Popular post from hit singer",
    likes: 130,
    comments: 5500
  }]
  const [posts, setPosts] = useState(initialPosts);
  const [section, setSection] = useState("postlist");
  const [value, setValue] = useState("");

  function onSearch(value){
    setValue(value);
    if(value === ""){
      setPosts(initialPosts)
    }else{
      setPosts(posts.filter(val => val.author.includes(value) || val.description.includes(value)));
    }
  }

  function onLogoClick(){
    setSection("postlist");  
  }

  function onProfileClick(){  
    setSection("profileview"); 
  }

  return (
    <div className="App">
      <Navbar onLogoClick={onLogoClick} onProfileClick={onProfileClick}/>
      <Searchbar value={value} onSearch={onSearch}/>
      {section === "postlist"
        ? <Postlist posts={posts}/>
        : <ProfileView />}
    </div>
  );
}

export default App;
