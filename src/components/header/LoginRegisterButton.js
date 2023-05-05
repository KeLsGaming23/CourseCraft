import {Link } from "react-router-dom";
function LoginRegisterButton() {
    return (
        <>
            <div className="col-md-3 text-end">
                <Link to="/loginPage" type="button" className="btn btn-outline-primary me-2">
                    login
                </Link>
                <Link to="/registerPage" type="button" className="btn btn-primary me-2">
                    Register
                </Link>
            </div>
        </>
    );
}
export default LoginRegisterButton;