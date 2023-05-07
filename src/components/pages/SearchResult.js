import { useContext, useEffect } from "react";
import { CourseContext } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";

function SearchResult() {

    const navigate = useNavigate();
    const { result, setSelectedCourse } = useContext(CourseContext);

    function handleSelecteCourse(results) {
        setSelectedCourse(results);
        navigate('./coursePage');
    }

    return (
        <>
            {result.length > 0 ? (
                result.map(results => (
                    <div className="card" key={results.id}>
                        <img className="card-img-top" src="..." alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{results.course_title}</h5>
                            <p className="card-text">{results.course_description}</p>
                            <button onClick={() => handleSelecteCourse(results)} className="btn btn-primary">Go somewhere</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </>
    );
}
export default SearchResult;