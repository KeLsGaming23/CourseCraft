import Card from "./card/Card";
import { useEffect, useContext, useState } from "react";
import { CourseContext } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";

function Suggested() {
    const [courseData, setCourseData] = useState([]);
    const { setSelectedCourse } = useContext(CourseContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/get/course')
            .then(res => res.json())
            .then(data => {
                setCourseData(data);
            })
    }, [setCourseData]);

    function handleCourse(course) {
        setSelectedCourse(course);
        localStorage.setItem('course', JSON.stringify(course));
        window.scrollTo(0, 0);
        setTimeout(() => {
            navigate('./coursePage');
        }, 1500);
    }

    return (
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <h3>Suggested Course</h3>
                    <hr />
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                        {
                            courseData.map((course, index) => (
                                <div
                                    key={course.id}
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