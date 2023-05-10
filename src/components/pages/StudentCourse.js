import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import axios from "axios";
import { CourseContext } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";

function StudentCourse() {

    const navigate = useNavigate();
    const { setSelectedCourse } = useContext(CourseContext);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const ListOfCourses = async () => {
            try {
                if (token) {
                    const response = await axios.get('http://127.0.0.1:8000/api/enrolledCourses', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    const courseDetails = response.data.map(courseData => courseData.course);
                    console.log(courseDetails);
                    setEnrolledCourses(courseDetails);
                    localStorage.setItem('courseDetails', courseDetails);
                }
            } catch (error) {
                console.log(error);
            }
        };
        ListOfCourses();
    }, [setEnrolledCourses]);

    function handleCourse(course) {
        setSelectedCourse(course);
        navigate('/coursePage');
    }

    function handleUnenroll() {
        alert('unenroll');
    }

    return (
        <>
            <div className="" style={{ height: "100vh" }}>
                <div className="mx-auto p-5 mt-5" style={{ width: "70%", border: "2px solid gray" }}>
                    <h3 className="bg-secondary text-white px-3">Your Enrolled Courses</h3>
                    <hr></hr>
                    <table className="table border-none">
                        <thead>
                            <tr>
                                <th>Course Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enrolledCourses.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.course_title}</td>
                                    <td>
                                        <div className="d-flex gap-3">
                                            <button className="btn btn-primary btn-sm"
                                                onClick={() => handleCourse(course)}>
                                                Go to Course
                                            </button>
                                            <button className="btn btn-danger btn-sm"
                                                onClick={handleUnenroll}>
                                                Unenroll Course
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default StudentCourse;