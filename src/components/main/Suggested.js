import Card from "./card/Card";
import data from "./course.json";
import { useEffect, useContext, useState } from "react";
import { CourseContext } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { LoginContext } from "../../context/LoginContext";

function Suggested() {
    const [courseData, setCourseData] = useState([]);
    const { selectedCourse, setSelectedCourse } = useContext(CourseContext);
    const navigate = useNavigate();
    let token = localStorage.getItem('token');
    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (token) {
                    const response = await axios.get('http://127.0.0.1:8000/api/get/course', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setCourseData(response.data);
                    localStorage.setItem('course_data', response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, [token, setCourseData]);
    function handleCourse(course) {
        setSelectedCourse(course);
        localStorage.setItem('course', JSON.stringify(course));
        navigate('./coursePage');
    }

    return (
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <h3>Suggested Course</h3>
                    <hr />
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            courseData.map((course, index) => (
                                <div
                                    key={course.id}
                                    className="col"
                                    onClick={() => handleCourse(course)}
                                >
                                    <Card
                                        key={index}
                                        title={course.course_title}
                                        image={course.course_thumbnail}
                                        description={course.course_description}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default Suggested;