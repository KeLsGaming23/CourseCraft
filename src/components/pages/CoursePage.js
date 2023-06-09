import { useContext } from "react";
import CourseBanner from "../CoursePage/CourseBanner";
import CourseOverview from "../CoursePage/CourseOverview";
import { CourseContext } from "../../context/CourseContext";
import Discover from "../main/Discover";

function CoursePage() {

    const { selectedCourse } = useContext(CourseContext);

    // for embeding video
    const link = selectedCourse.course_introduction;
    let newLink = link.replace('watch?v=', 'embed/');
    // const videoLink = newLink + '?autoplay=1';
    localStorage.setItem('selectedCourse', selectedCourse.id);
    return (
        <>
            <CourseBanner
                title={selectedCourse.course_title}
                description={selectedCourse.course_description}
                image={selectedCourse.course_thumbnail}
            />
            <CourseOverview
                title={selectedCourse.course_title}
                description={selectedCourse.course_description}

                name={selectedCourse.instructorName}
                specialities={selectedCourse.instructorSpecialities}
                image={selectedCourse.instructorImage}
                video={newLink}
            />
            <Discover />
        </>
    );
}
export default CoursePage;