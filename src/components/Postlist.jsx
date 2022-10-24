import Post from "./Post";
import React, {useState, useEffect} from 'react';
import { getPosts } from "../service/data-service";

const initialState = [];

function Postlist(props){
  const [posts, setPosts] = useState(initialState);

  useEffect(() => {
    getPosts().then((post) => {
      setPosts(post);
    })
    .catch(() => {
      props.setToken("");
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
          comments={post.comments}/>
      ))}
    </div>
  );
}
export default Postlist;