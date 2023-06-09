import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileContext";

function ProfileDetils(props) {

    const { setEditForm } = useContext(ProfileContext);

    function handleEdit() {
        setEditForm(true);
    }

    return (
        <>
            <div className="" style={{}}>
                <div className="row g-3">
                    <div className="col-12">
                        <h5>Name:</h5>
                        <div className="p-2" style={{ background: "#D4CDDA" }}>
                            <span className="">{props.name}</span>
                        </div>
                    </div>
                    <div className="col-12">
                        <h5>Email:</h5>
                        <div className="p-2" style={{ background: "#D4CDDA" }}>
                            <span className="">{props.email}</span>
                        </div>
                    </div>
                    <div className="text-end">
                        <button className="btn btn-primary btn-sm" onClick={handleEdit}>Edit Details</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileDetils;