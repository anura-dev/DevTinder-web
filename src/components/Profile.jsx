import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  //console.log("user:::", user);

  return (
    user && (
      <div>
        <h1>
          <EditProfile user={user} />
        </h1>
      </div>
    )
  );
};

export default Profile;
