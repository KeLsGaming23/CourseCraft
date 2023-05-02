import {Link } from "react-router-dom";
function LoginRegisterButton() {
    return (
        <>
            <div className="col-md-3 text-end">
                <a href="http://127.0.0.1:8000/login" type="button" className="btn btn-outline-primary me-2">
                    login
                </a>
                <button type="button" className="btn btn-primary">Sign-up</button>
            </div>
        </>
    );
}
export default LoginRegisterButton;