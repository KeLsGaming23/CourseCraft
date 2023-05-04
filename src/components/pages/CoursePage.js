import { useContext } from "react";
import CourseBanner from "../CoursePage/CourseBanner";
import CourseOverview from "../CoursePage/CourseOverview";
import { CourseContext } from "../../context/CourseContext";

function CoursePage() {

    const { selectedCourse } = useContext(CourseContext);

    return (
        <>
            <CourseBanner
                title={selectedCourse.name}
                description={selectedCourse.description}
                image={selectedCourse.image}
            />
            <CourseOverview
                name={selectedCourse.instructorName}
                specialities={selectedCourse.instructorSpecialities}
                image={selectedCourse.instructorImage}
            />
        </>
    );
}
export default CoursePage;