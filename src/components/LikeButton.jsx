import { useState } from "react";

function LikeButton(props) {
    const [likes, setLikes] = useState(props.likes);
    return (
        <button 
            onClick={() => setLikes(likes + 1)} 
            type="button" 
            className="btn btn-danger ms-auto ms-5 mt-auto mt-5">🤍{likes}
        </button>
    );
  }
  
  export default LikeButton;