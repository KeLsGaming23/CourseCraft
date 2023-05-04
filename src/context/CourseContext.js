import { createContext, useState } from "react";


export const CourseContext = createContext();
export const CourseProvider = (props) => {

    const [courseData, setCourseData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);

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