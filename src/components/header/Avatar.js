import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

function Avatar() {
    const {setIsLogin, setUserRole} = useContext(LoginContext);
    function handleLogout(e){
        e.preventDefault();
        setUserRole("Not Login")
        setIsLogin(false)
    }
    return (
        <>
            <div className="dropdown text-end">
                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                </a>
                <ul className="dropdown-menu text-small">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#ID" onClick={handleLogout}>Sign out</a></li>
                </ul>
            </div>
        </>
    );
}
export default Avatar;