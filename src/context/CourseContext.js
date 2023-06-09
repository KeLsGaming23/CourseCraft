import { createContext, useState } from "react";


export const CourseContext = createContext();
export const CourseProvider = (props) => {

    // function getEnrolledCourses() {
    //     const courseDetails = localStorage.getItem('courseDetails')
    //     return courseDetails ? JSON.parse(courseDetails) : null
    // }

    function getInitialState() {
        const course = localStorage.getItem('course')
        return course ? JSON.parse(course) : null
    }

    function getCurrentYoutubeVideo() {
        const youtubeLink = localStorage.getItem('youtubeLink')
        return youtubeLink;
    }
    const [courseData, setCourseData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(getInitialState);
    const [result, setResult] = useState([]);
    const [currentCourse, setCurrentCourse] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(getCurrentYoutubeVideo);

    return (
        <>
            <CourseContext.Provider value={{
                result, setResult,
                courseData, setCourseData,
                selectedCourse, setSelectedCourse,
                result, setResult,
                currentCourse, setCurrentCourse,
                currentVideo, setCurrentVideo
            }}>
                {props.children}
            </CourseContext.Provider>
        </>
    );
}