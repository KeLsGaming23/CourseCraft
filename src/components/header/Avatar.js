import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

function Avatar() {
    const {user, setUser} = useContext(LoginContext);
    function handleSignOut(e){
      e.preventDefault();
      if(user!==null){
        setUser(null);
      }
    }
    return (
        <>
            <div className="dropdown text-end">
                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                    {user!==null ? user.name: ""}
                </a>
                <ul className="dropdown-menu text-small">
                    <li><a className="dropdown-item" href="#ID">New project...</a></li>
                    <li><a className="dropdown-item" href="#ID">Settings</a></li>
                    <li><a className="dropdown-item" href="#ID">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" onClick={handleSignOut} >Sign out</a></li>
                </ul>
            </div>
        </>
    );
}
export default Avatar;