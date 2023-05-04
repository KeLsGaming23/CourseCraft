function CourseBanner() {
    return (
        <>
            <div style={{}}>
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">This is Course Title</h1>
                        <p className="lead">This is Course Desciption</p>
                        <p className="lead">This is Course Ratigs</p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseBanner;