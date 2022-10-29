import { useNavigate } from 'react-router';
function ProfileView(props) {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    if(!user){
      navigate("/login");
    }

    return (
      <div className="d-flex flex-column align-items-center">
        <img src={user.avatar} width="100" height="100" className="rounded-circle " alt="Profile"/>
        <h4 className="card-author mt-3">{user.username} </h4>
        <p className="card-text mt-3 ms-3 me-3">{user.bio}</p>
        <button
            onClick={() => props.onLogout()} 
            type="button" 
            className="btn btn-danger mt-auto mt-5">Log out
        </button>
      </div>
    );
  }
  
  export default ProfileView;
