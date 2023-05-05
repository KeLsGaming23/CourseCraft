import { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { LoginContext } from "../../context/LoginContext";
import axios from 'axios';

function Avatar() {
    const {user, setUser} = useContext(LoginContext);
    let token = localStorage.getItem('token');
    let role = localStorage.getItem('role');
    useEffect(() => {
        const fetchUser = async () => {
          try {
            if (token){
              const response = await axios.get('http://127.0.0.1:8000/api/user',{
                headers:{
                  Authorization: `Bearer ${token}`
                }
              });
              setUser(response.data);
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchUser();
      }, [token, setUser]);
    function handleSignOut(e){
      e.preventDefault();
      if(user!==null){
        setUser(null);
      }
    }
    return (
        <>
            <div className="dropdown text-end">
                <a href="#ID" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                    {user!==null ? user.name: ""}
                </a>
                <ul className="dropdown-menu text-small">
                    <li>{role == 2 ?
                        <Link to="/newCourse" className="dropdown-item" href="#ID">New Course</Link> :
                        <a className="dropdown-item" href="#ID">Student Portal</a>
                        }</li>
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