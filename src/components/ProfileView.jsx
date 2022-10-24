import { getUser } from "../service/data-service";
import { useState } from "react";
function ProfileView(props) {
  
    const [avatar, setAvatar] = useState("");
    const [bio, setBio] = useState("");
    const [username, setUsername] = useState("");

    getUser()
      .then((data) => {
        setAvatar(data.avatar);
        setBio(data.bio);
        setUsername(data.username);
        localStorage.setItem("userid", data.id);
        props.doSetCurrentUser(data);
    })
      .catch(() => {
        localStorage.setItem("userid", "");
        localStorage.setItem("token", "");

    });

    return (
      <div className="d-flex flex-column align-items-center">
        <img src={avatar} width="100" height="100" className="rounded-circle " alt="Profile"/>
        <h4 className="card-author mt-3">{username} </h4>
        <p className="card-text mt-3 ms-3 me-3">{bio}</p>
        <button
            onClick={() => props.onLogout()} 
            type="button" 
            className="btn btn-danger mt-auto mt-5">Log out
        </button>
      </div>
    );
  }
  
  export default ProfileView;
