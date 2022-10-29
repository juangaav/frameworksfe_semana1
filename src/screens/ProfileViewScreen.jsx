import Navbar from "../components/Navbar";
import ProfileView from "../components/ProfileView";

function ProfileViewScreen(doSetCurrentUser, onLogout, currentUser) {
    return(
        <div className="Home">
          <Navbar/>
          <ProfileView doSetCurrentUser={doSetCurrentUser} onLogout={onLogout} currentUser={currentUser}/>
        </div>
    );
}

export default ProfileViewScreen;