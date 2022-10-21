import pfp from "../img/pfp.jpg";
function ProfileView() {
    
    return (
      <div className="d-flex flex-column align-items-center">
        <img src={pfp} width="100" height="100" className="rounded-circle " alt="Profile"/>
        <h4 className="card-author mt-3">@username </h4>
        <p className="card-text mt-3 ms-3 me-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
    );
  }
  
  export default ProfileView;
