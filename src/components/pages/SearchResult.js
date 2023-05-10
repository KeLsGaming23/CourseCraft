import { useContext, useEffect } from "react";
import { CourseContext } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";

function SearchResult() {

    const navigate = useNavigate();
    const { result, setSelectedCourse } = useContext(CourseContext);

    function handleSelecteCourse(results) {
        setSelectedCourse(results);
        navigate('/coursePage');
    }

    return (
        <>
            <div className="container mt-5" style={{ height: "100vh" }}>
                {result.length > 0 ? (
                    result.map(results => (
                        <div className="card mb-3" key={results.id} >
                            <img className="card-img-top" src="..." alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{results.course_title}</h5>
                                <p className="card-text">{results.course_description}</p>
                                <button onClick={() => handleSelecteCourse(results)} className="btn btn-primary">Explore Course</button>
                            </div>
                        </div>
                    ))

                ) : (
                    <div className="text-center mt-5">
                        <h3>No results found.</h3>
                        <p>Try to search other course</p>
                    </div>

                )}
            </div>
        </>
    );
}
export default SearchResult;