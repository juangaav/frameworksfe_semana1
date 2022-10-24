import { useState } from "react";
import { like } from "../service/data-service";
function LikeButton(props) {

    function changeLikes(){
        setLikes(likes + 1);
        like(props.id);
    }

    const [likes, setLikes] = useState(props.likes);
    return (
        <button 
            onClick={() => changeLikes()} 
            type="button" 
            className="btn btn-danger ms-auto ms-5 mt-auto mt-5">🤍{likes}
        </button>
    );
  }
  
  export default LikeButton;