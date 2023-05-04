import {Link } from "react-router-dom";
function LoginRegisterButton() {
    return (
        <>
            <div className="col-md-3 text-end">
                <Link to="/loginPage" type="button" className="btn btn-outline-primary me-2">
                    login
                </Link>
                <button type="button" className="btn btn-primary">Sign-up</button>
            </div>
        </>
    );
}
export default LoginRegisterButton;