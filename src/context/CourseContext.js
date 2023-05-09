import { createContext, useState } from "react";


export const CourseContext = createContext();
export const CourseProvider = (props) => {

    // function getEnrolledCourses() {
    //     const courseDetails = localStorage.getItem('courseDetails')
    //     return courseDetails ? JSON.parse(courseDetails) : null
    // }

    function getInitialState() {
        const course = localStorage.getItem('course')
        return course ? JSON.parse(course) : []
    }

    const [result, setResult] = useState([]);
    const [courseData, setCourseData] = useState([]);
    // const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(getInitialState);

    return (
        <>
            <CourseContext.Provider value={{
                result, setResult,
                courseData, setCourseData,
                selectedCourse, setSelectedCourse
            }}>
                {props.children}
            </CourseContext.Provider>
        </>
    );
}