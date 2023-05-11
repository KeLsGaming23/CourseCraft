import { useContext, useEffect, useState } from "react";
import ProfileDetils from "../Profile/ProfileDetails";
import EditProfileForm from "../Profile/editProfileForm";
import { ProfileContext } from "../../context/ProfileContext";
import axios from "axios";

function ProfilePage() {

    const { editFormShow } = useContext(ProfileContext);
    const [user, setUser] = useState([]);

    let token = localStorage.getItem('token');
    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (token) {
                    const response = await axios.get('http://127.0.0.1:8000/api/user', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setUser(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, [token]);

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
                        {editFormShow ?
                            <EditProfileForm /> :
                            <ProfileDetils
                                name={user.name}
                                email={user.email}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProfilePage;