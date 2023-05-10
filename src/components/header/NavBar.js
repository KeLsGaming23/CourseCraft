import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import LoginRegisterButton from "./LoginRegisterButton";
import { useContext, useState } from "react";
import { CourseContext } from "../../context/CourseContext";
// import logo from './logo.gif';

function NavBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { setResult } = useContext(CourseContext);
  // function logout() {
  //   localStorage.clear();
  //   props.setUser(null);
  // }

  let buttons;
  let profile;
  if (localStorage.getItem('token')) {
    // buttons = (
    //   <div>
    //     <Link className="nav-link" to="/" onClick={logout} >Logout  </Link>
    //   </div>
    // )
    profile = (
      <div>
        <Avatar onClick={props.onClick} />
      </div>
    )
  } else {
    buttons = (
      <div>
        <LoginRegisterButton />
      </div>
    )

  }
  const handleSearch = async (event) => {
    event.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/get/course");
    const data = await response.json();
    const filteredResults = data.filter((result) =>
      result.course_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResult(filteredResults);
    console.log(filteredResults);
    navigate('/search');
  };
  return (
    <>
      <div className="container-fluid">
        <header className="d-flex align-items-center justify-content-around p-3 border-bottom">
          {/* <div className="col-md-3 mb-2 mb-md-0"> */}
          <Link to="/" className="text-decoration-none text-black">
            {/* <img src={logo} style={{ width: "150px", height: "80px", objectFit: "cover" }} alt="logo"></img> */}
            <h1>CourseCraft</h1>
            {/* <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap" /></svg> */}
          </Link>
          {/* </div> */}
          {/* Search Bar */}
          <form onSubmit={handleSearch}>
            <input type="text"
              placeholder="Search Course"
              value={searchQuery}
              className="form-control"
              style={{ width: "700px" }}
              onChange={(event) => setSearchQuery(event.target.value)} />
            {/* <button type="submit">Search</button> */}
          </form>
          {/* <div>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/secondMain" className="nav-link px-2 link-secondary">
                  Student Portal
                </Link>
              </li>
            </ul>
          </div> */}
          {/* {localStorage.getItem('userName')} */}
          {profile}{buttons}
          {/* {user!==null ? <Avatar /> : <LoginRegisterButton />} */}
          {/* Render SearchResults component if there are results */}
        </header>
      </div>
    </>
  );
}

export default NavBar;