
function ErrorPage() {
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center" style={{height: "50vh"}}>
                <h1 className="text-center mb-4">Oops! Your Account is Admin.</h1>
                <p className="text-center">Please sign in to Admin Dashboard.</p>
                <div className="mt-4">
                    <a href="http://127.0.0.1:8000/dashboard" className="btn btn-primary">Admin Dashboard</a>
                </div>
            </div>
        </>
    );
}
export default ErrorPage;