import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { CourseContext } from "../../context/CourseContext";

function CourseOverview(overview) {

    const { isEnroll, setIsEnroll, isLogin, setIsLogin } = useContext(LoginContext);
    const { selectedCourse } = useContext(CourseContext);

    function handleEnroll() {
        console.log(selectedCourse);
    }
    return (
        <>
            <div className="container d-flex justify-content-center gap-5">
                <div className="overflow-y-auto my-3 px-3" style={{ maxHeight: "400px" }}>
                    <div className="card" style={{}}>
                        <div className="card-body " >
                            <h1>What You'll learn</h1>
                            <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                            <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                            <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                            <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                            <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                            <p><span><i className="fa-solid fa-check"> </i></span> Automate tasks on their computer by writing simple Python programs.</p>
                        </div>
                    </div>

                    <div className="card my-5" style={{}}>
                        <div className="card-body p-3" >
                            <h1>Course Content</h1>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            content
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            content
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            content
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card my-5" style={{}}>
                        <div className="card-body p-3" >
                            <h1 className="bg-secondary text-white px-3">Instructor</h1>
                            <div className="row d-flex align-items-center">
                                <div className="col-4">
                                    <img
                                        style={{ width: "120px", hight: "120px", borderRadius: "50%" }}
                                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/s458/blank-profile-picture-hd-images-photo.JPG"
                                    />
                                </div>
                                <div className="col-8 p-2">
                                    <h5>John Doe</h5>
                                    <p>Full Stack Developer</p>
                                    <p>
                                        John Doe is a professional full stack dev
                                        responsible for working on both front-end and
                                        back-end development processes. They design,
                                        develop, and maintain fully-fledged and
                                        functioning platforms with databases or servers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-3" style={{}}>
                    <div className="card">
                        <iframe
                            width="560"
                            height="315"
                            src={overview.video}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
                            allowfullscreen>
                        </iframe>
                        <div className="card-body p-3 text-center" >
                            <h5>Free Access</h5>
                            {isLogin ? <button className="btn btn-primary" onClick={handleEnrollNow}>Go to Course Now</button> :
                                <Link to="/learningPage"><button className="btn btn-primary">Enroll Now</button> </Link>}
                        </div>
                    </div>
                </div>

            </div >


        </>
    );
}

export default CourseOverview;