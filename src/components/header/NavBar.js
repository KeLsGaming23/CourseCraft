import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import LoginRegisterButton from "./LoginRegisterButton";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
function NavBar() {
    const { isLogin, userRole } = useContext(LoginContext);
    return (
        <>
            <div className="container">
                <header className="d-flex align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <h1>Course Craft</h1>
                            {/* <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap" /></svg> */}
                        </Link>
                    </div>
                    <form className="col-sm-5 col-lg mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-secondary" placeholder="Search..." aria-label="Search" />
                    </form>
                    <div>
                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <Link to="/secondMain" className="nav-link px-2 link-secondary">
                                    {userRole === "student"
                                        ? "Student Portal"
                                        : userRole === "instructor"
                                            ? "Instructor Portal"
                                            : userRole === "admin"
                                                ? "Admin Portal"
                                                : "Discover Course Now"}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {isLogin ? <Avatar /> : <LoginRegisterButton />}
                </header>
            </div>
        </>
    );
}
export default NavBar;