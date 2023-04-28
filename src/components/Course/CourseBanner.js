function CourseBanner() {
    return (
        <>
            <div style={{ background: "gray", color: "white" }}>
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">This is Course Title</h1>
                        <p className="lead">This is Course Desciption</p>
                        <p className="lead">This is Course Ratigs</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
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