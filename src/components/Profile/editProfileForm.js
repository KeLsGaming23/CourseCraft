import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditProfileForm() {

    const navigate = useNavigate();
    const [state, setState] = useState(null);
    const [updatedUser, setUpdatedUser] = useState({
        name: '',
        email: '',
    });

    let token = localStorage.getItem('token');
    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (token) {
                    const response = await axios.get('http://127.0.0.1:8000/api/user', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setState(response.data.id);
                    setUpdatedUser(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchUser();
    }, [token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            const response = await axios.post(
                `http://127.0.0.1:8000/api/user/${state}`,
                updatedUser,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('User updated successfully');
        } catch (error) {
            console.log(error);
        }
    };

    function handleCancel() {
        navigate('/profilePage');
    }

    return (
        <>
            <div className="" style={{}}>
                <form className="row g-3">
                    <div className="col-12">
                        <label htmlFor="">Name:</label>
                        <div className="">
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={updatedUser.name}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="">Email:</label>
                        <div className="">
                            <input type="email"
                                className="form-control"
                                name="email"
                                value={updatedUser.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end gap-1">
                        <button className="btn btn-outline-secondary btn-sm" onClick={handleCancel}>Cancel</button>
                        <button className="btn btn-primary btn-sm" onClick={handleSave}>Save</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditProfileForm;