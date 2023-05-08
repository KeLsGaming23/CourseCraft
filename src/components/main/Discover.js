import { useEffect, useState, useContext } from "react";
import { CourseContext } from "../../context/CourseContext";
import Card from "./card/Card";
import data from "./course.json";
import { useNavigate, useLocation } from "react-router-dom";

function Discover() {

    const navigate = useNavigate();
    const location = useLocation();
    const [course, setCourse] = useState([]);
    const { setSelectedCourse } = useContext(CourseContext);

    useEffect(() => {
        const { courses } = data;
        setCourse(courses);
    }, [setCourse]);

    function handleDiscoverCourse(course) {
        setSelectedCourse(course);
        localStorage.setItem('course', JSON.stringify(course));
        window.scrollTo(0, 0);
        setTimeout(() => {
            navigate('/coursePage');
        }, 1500);
    }

    function handleSeeMore() {
        alert('this is filter page');
    }

    return (
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <h3>Discover Course</h3>
                        <button className="btn btn-primary btn-sm" onClick={handleSeeMore}>See more</button>
                    </div>
                    <hr />
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            course.map((course, index) => (
                                <div
                                    key={course.id}
                                    onClick={() => handleDiscoverCourse(course)}
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
export default Discover;