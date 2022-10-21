import "../index.css";
import LikeButton from "./LikeButton";
function Post(props) {
    return (
      <div className="card m-3" style={{ width: "20rem" }}>
        <img src={props.img.viejo} className="card-img-top" alt= "Post"/>
        <div className="card-body">
          <div className="d-flex flex-row">
            <h6 className="text-secondary"> {props.postage} </h6>
            <LikeButton likes={props.likes}/>
          </div>
          <h5 className="card-author">{props.author || "default author"}</h5>
          <p className="card-text mt-3">{props.description}</p>
          <button
            type="button"
            className="link-button"
            onClick={() => this.setState({ showSomething: true })}
            >
            💬Comments ({props.comments})
            </button>
        </div>
      </div>
    );
  }

export default Post;