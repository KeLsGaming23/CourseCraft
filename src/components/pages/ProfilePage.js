import { useContext, useEffect, useState } from "react";
import ProfileDetils from "../Profile/ProfileDetails";
import EditProfileForm from "../Profile/editProfileForm";
import { ProfileContext } from "../../context/ProfileContext";
import axios from "axios";

function ProfilePage() {

    const { editFormShow } = useContext(ProfileContext);
    const [user, setUser] = useState([]);
    const [imageUrl, setImageUrl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");

    let token = localStorage.getItem('token');
    const handleImageChange = async () => {
        // Prompt the user to select a file
        const file = await promptForFile('.jpg,.png');

        // Upload the file
        const formData = new FormData();
        formData.append("image", file);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/users/image', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(response.data);
            setImageUrl(response.data.path);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    
    const promptForFile = async (accept) => {
        return new Promise(resolve => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = accept;
          input.onchange = (event) => {
            resolve(event.target.files[0]);
          };
          input.click();
        });
      };
      
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
                        src={user.users_img ? user.users_img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                        alt=""
                        onClick={handleImageChange}
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