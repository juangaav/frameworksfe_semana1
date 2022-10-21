import Post from "./Post";

function Postlist({posts}){
    return (
        <div className="d-flex flex-column">
          {posts.map((post, i) => (
            <Post
            key={i}
            postage={post.age}
            img={post.img}
            author={post.author}
            description={post.description}
            likes={post.likes}
            comments={post.comments}/>
          ))}
        </div>
      );
}
export default Postlist;