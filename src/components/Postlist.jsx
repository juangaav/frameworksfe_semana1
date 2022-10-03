import Post from "./Post";
import viejo from "../img/viejo.jpg";

const posts = [
  {
    age: "3 min ago",
    img: {viejo},
    author: "@thedogist",
    description: "Post from dog photographer",
    likes: "80k",
    comments:"300"
  },
  {
    age: "15h ago",
    img: {viejo},
    author: "@food",
    description: "Food post from the famous food account",
    likes: "50k",
    comments:"100"
  },
  {
    age: "2y ago",
    img: {viejo},
    author: "@singer",
    description: "Popular post from hit singer",
    likes: "130k",
    comments:"5500"
  }
];

function Postlist(){
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
              comments={post.comments}
            />
          ))}
        </div>
      );
}
export default Postlist;