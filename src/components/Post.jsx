import "../index.css";
function Post({ postage, author, img, description, likes, comments }) {
    return (
      <div className="card m-3" style={{ width: "20rem" }}>
        <img src={img.viejo} className="card-img-top" alt= "Post"/>
        <div className="card-body">
          <div className="d-flex flex-row">
            <h6 className="text-secondary"> {postage} </h6>
            <button type="button" className="btn btn-danger ms-auto ms-5 mt-auto mt-5">🤍{likes}</button>
          </div>
          <h5 className="card-author">{author || "default author"}</h5>
          <p className="card-text mt-3">{description}</p>
          <button
            type="button"
            className="link-button"
            onClick={() => this.setState({ showSomething: true })}
            >
            💬Comments ({comments})
            </button>
        </div>
      </div>
    );
  }


export default Post;