import Post from "./Post";
import React, {useState, useEffect} from 'react';
import { getPosts } from "../service/data-service";
import { useNavigate } from 'react-router';

const initialState = [];

function Postlist(props){
  const [posts, setPosts] = useState(initialState);

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  if(!user){
    navigate("/login");
  }
  
  useEffect(() => {
    getPosts().then((post) => {
      setPosts(post);
    })
    .catch((err) => {
      if(err.response.status === 401){
          localStorage.setItem("token", "");
          props.setToken("");
      }
    });
  });
  
  return (
    <div className="d-flex flex-column">
      {posts === initialState
        ? "Loading..."
        : posts
        .filter((e) => e.text.includes(props.search))
        .map((post) => (
          <Post
          id={post.id}
          postage={post.createdAt}
          image={post.image}
          text={post.text}
          author={post.author}
          likes={post.likes}
          comments={post.comments}
          setToken={props.setToken}/>
      ))}
    </div>
  );
}
export default Postlist;