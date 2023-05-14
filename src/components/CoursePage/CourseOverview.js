import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { CourseContext } from "../../context/CourseContext";
import axios from "axios";
import "./CourseOverview.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CourseOverview(overview) {

    const navigate = useNavigate();
    const { isEnroll, setIsEnroll } = useContext(LoginContext);
    const { selectedCourse } = useContext(CourseContext);
    const token = localStorage.getItem('token');
    const getEnrolledCourse = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/enrolledCourses', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const enrolledCourse = response.data.find((course) => course.course_id === selectedCourse.id);
            setIsEnroll(enrolledCourse !== undefined);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (token) {
            getEnrolledCourse();
        }
    }, [setIsEnroll, selectedCourse.id, token]);

    function handleEnroll() {
        const config = {};
        const token = localStorage.getItem('token');
        if (token) {
            config.headers = {
                Authorization: `Bearer ${token}`,
            };
        } else {
            loginNotify();
            window.scrollTo(0, 0);
        }

        const data = { course_id: selectedCourse.id };
        axios
            .post(`http://127.0.0.1:8000/api/enrollCourse/${selectedCourse.id}`, data, config) // fix URL
            .then((response) => {
                console.log(response);
                setIsEnroll(true);
                notify();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const notify = () => toast.success(`Succesfully Enrolled ${selectedCourse.course_title}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const loginNotify = () => toast.error('You need to login to enroll', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    function handleGoToCourse() {
        navigate('/learningPage');
    }

    return (
        <>
            <div className="container d-flex flex-row-reverse justify-content-center gap-5 my-5">
                <div className="overflow-y-auto my-3 px-3" style={{ maxHeight: "400px" }}>
                    <div className="card" style={{}}>
                        <div className="card-body " >
                            <h2>{overview.title}</h2>
                            <p>{overview.description}</p>
                            <br />
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
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            content
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            content
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            content
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
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
                <div className="my-3" style={{}} id="video-card">
                    <div className="card">
                        <iframe
                            width="560"
                            height="315"
                            src={overview.video}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
                            allowFullScreen>
                        </iframe>
                        <div className="card-body p-3 text-center" >
                            <h5>Free Access</h5>
                            {isEnroll ?
                                <button onClick={handleGoToCourse} className="btn-course">Go to Course</button>
                                :
                                <button onClick={handleEnroll} className="btn-course">Enroll Now</button>
                            }
                        </div>
                    </div>
                </div>
            </div >

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />
        </>
    );
}

export default CourseOverview;