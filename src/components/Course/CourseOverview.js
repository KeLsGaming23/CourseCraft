import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

function CourseOverview() {
    const {isEnroll, setIsEnroll} = useContext(LoginContext);
    const {isLogin, setIsLogin} = useContext(LoginContext);
    function handleEnrollNow(){
        alert("Are you sure you want to enroll?");
    }
    return (
        <>
            <div className="container d-flex justify-content-between">
                <div className="" style={{ width: "50%" }}>
                    <div className="p-3" style={{ border: "2px solid gray" }}>
                        <h1>What You'll learn</h1>
                        <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                        <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                        <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                        <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                        <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                        <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                    </div>

                    <div className="">
                        <h1>Course Content</h1>
                        <button style={{ border: "2px solid gray", width: "100%" }} className="p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                            Course Sections
                        </button>
                        <div className="collapse" id="collapseExample">
                            <div style={{ border: "2px solid gray" }} className="p-4">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>

                    <div className="" style={{}}>
                        <h1>Requirements</h1>
                        <li>Downloading and installing Python is covered at the start of the course.</li>
                        <li>Basic computer skills: surfing websites, running programs, saving and opening documents, etc.</li>
                    </div>

                    <div className="">
                        <h1>Instructor</h1>
                        <p>Instructor Name</p>
                        <p>Instructor specialities</p>
                        <img
                            style={{ width: "80px", hight: "80px", borderRadius: "50%" }}
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        />
                        <p>Instructor Desciption</p>
                    </div>
                </div>

                <div className="" style={{ width: "40%", position: "absolute", top: "30%", left: "60%" }}>
                    <div className="">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src="https://cdn.shopify.com/s/files/1/2018/8867/files/play-button.png?422609932170209736" class="card-img-top" alt="..." />
                            <div class="card-body p-3" >
                                <h5>Course Prize</h5>
                                {isLogin ? <button className="btn btn-primary" onClick={handleEnrollNow}>Go to Course Now</button> : 
                                <Link to="/loginPage"><button className="btn btn-primary">Enroll Now</button> </Link>}
                                
                                
                                <div className="">
                                    <p>Free Access</p>
                                    <h5>This Course Includes</h5>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >


        </>
    );
}

export default CourseOverview;