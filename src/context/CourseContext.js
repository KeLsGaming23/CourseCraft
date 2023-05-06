import { createContext, useState } from "react";


export const CourseContext = createContext();
export const CourseProvider = (props) => {

    function getInitialState() {
        const course = localStorage.getItem('course')
        return course ? JSON.parse(course) : []
    }

    const [courseData, setCourseData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(getInitialState);

    return (
        <>
            <CourseContext.Provider value={{
                courseData, setCourseData,
                selectedCourse, setSelectedCourse,
            }}>
                {props.children}
            </CourseContext.Provider>
        </>
    );
}