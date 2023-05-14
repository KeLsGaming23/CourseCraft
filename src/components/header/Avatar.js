import { useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from "../../context/LoginContext";
import axios from 'axios';

function Avatar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(LoginContext);
  let token = localStorage.getItem('token');
  let role = localStorage.getItem('role');
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const response = await axios.get('http://127.0.0.1:8000/api/user', {
            headers: {
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

  function handleSignOut() {
    localStorage.clear();
    navigate('/');
  }
  return (
    <>
      <div className="dropdown">
        <span className="d-flex align-items-center gap-2 link-dark text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
          <h6>{localStorage.getItem('userName')}</h6>
          <img 
            src={user?.users_img ?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} 
            alt="mdo" 
            width="40" 
            height="40" 
            className="rounded-circle" 
          />
        </span>
        <ul className="dropdown-menu text-small">
          <li>{role == 2 ?
            <Link to="/newCourse" className="dropdown-item" href="#ID">New Course</Link> : null
            // <a className="dropdown-item" href="#ID">Student Portal</a>
          }
          </li>
          <li>{role == 1 ?
            <Link to="/studentCourse" className="dropdown-item" href="#ID">Enrolled Courses</Link> :
            null
          }
          </li>

          <li>
            {role == 2 ?
              <Link to="/newCourseCreated" className="dropdown-item" href="#ID">Add new topic</Link> : null
            }
          </li>
          <li>
            <Link to="/profilePage" className="dropdown-item">Profile</Link>
          </li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item pointer" onClick={handleSignOut} >Sign out</a></li>
        </ul>
      </div>
    </>
  );
}
export default Avatar;