import { createContext, useState } from "react";


export const CourseContext = createContext();
export const CourseProvider = (props) => {

    function getInitialState() {
        const course = localStorage.getItem('course')
        return course ? JSON.parse(course) : []
    }

    const [courseData, setCourseData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(getInitialState);
    const [result, setResult] = useState([]);

    return (
        <>
            <CourseContext.Provider value={{
                courseData, setCourseData,
                selectedCourse, setSelectedCourse,
                result, setResult
            }}>
                {props.children}
            </CourseContext.Provider>
        </>
    );
}