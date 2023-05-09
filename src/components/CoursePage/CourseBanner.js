import "./CourseBanner.css"

function CourseBanner(course) {
    return (
        <>
            <div style={{}}>
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-secondary" id="Course-banner">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-white">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis-white">{course.title}</h1>
                        <p className="lead">{course.description}</p>
                        <p className="lead">This is Course Ratigs</p>
                        <div className="btn-group">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-lg-3" src={course.image} alt="" width="720" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseBanner;