
import { useState } from "react";
import ProfileSignIn from "./ProfileSignIn";
import ProfileSignedIn from "./ProfileSignedIn";
import "./profile.scss";

const Profile = () => {
  const [signedin] = useState(true);
  return (
    <>
    <div className="container">
    {!signedin ? <ProfileSignedIn /> : <ProfileSignIn />}
    </div>
    </>
  );
};

export default Profile;
