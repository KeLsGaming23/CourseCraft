import {Link } from "react-router-dom";
function LoginRegisterButton() {
    return (
        <>
            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">
                    <Link to="/loginPage" 
                    className="d-inline-flex link-body-emphasis text-decoration-none">
                        Login
                    </Link>
                </button>
                <button type="button" className="btn btn-primary">Sign-up</button>
            </div>
        </>
    );
}
export default LoginRegisterButton;