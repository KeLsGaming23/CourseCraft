import { useContext } from "react";
import { CourseContext } from "../../context/CourseContext";

function SearchResult() {
    const { result } = useContext(CourseContext);
    return (
        <>
         {result.length > 0 ? (
            result.map(results => (
                <div className="card" key={results.id}>
                    <img className="card-img-top" src="..." alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{results.course_title}</h5>
                            <p className="card-text">{results.course_description}</p>
                            <a href="#ID" className="btn btn-primary">Go somewhere</a>
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