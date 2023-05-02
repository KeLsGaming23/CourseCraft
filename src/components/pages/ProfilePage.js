import { useContext } from "react";
import ProfileDetils from "../Profile/ProfileDetails";
import EditProfileForm from "../Profile/editProfileForm";
import { ProfileContext } from "../../context/ProfileContext";

function ProfilePage() {

    const { editFormShow } = useContext(ProfileContext);

    return (
        <>
            <div className="container">
                <div className="p-5 mx-auto" style={{ width: "70%", border: "2px solid gray" }}>
                    <div className="text-center">
                        <img
                            className=""
                            style={{ width: "150px", hight: "150px", borderRadius: "50%" }}
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            alt=""
                        />
                    </div>
                    <div className="py-5">
                        {editFormShow ? <EditProfileForm /> : <ProfileDetils />}
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProfilePage;