import Card from "./card/Card";
import data from "./course.json";
import { useEffect, useContext } from "react";
import { CourseContext } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";


function Suggested() {

    const navigate = useNavigate();
    const { courseData, setCourseData,
        selectedCourse, setSelectedCourse
    } = useContext(CourseContext);

    useEffect(() => {
        const { courses } = data;
        setCourseData(courses);
    }, [setCourseData]);

    function handleCourse(course) {
        setSelectedCourse(course);
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
                                    <Card key={index}
                                        title={course.name}
                                        image={course.image}
                                        description={course.description}
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