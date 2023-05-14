import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import LoginRegisterButton from "./LoginRegisterButton";
import { useContext, useState } from "react";
import { CourseContext } from "../../context/CourseContext";
import Logo1 from './header-logo.png';
import './Navbar.css'

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
      <div className="d-flex justify-content-evenly nav-container navbar navbar-expand-lg navbar-light bg-light nab-var fixed-top">
        <Link to="/#" className="text-decoration-none text-black">
          <img src={Logo1} className="nav-logo" style={{ width: "170px", height: "70px" }} alt="logo"/>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <header className=" p-3 border-bottom nav-item active d-flex nav-header">
              {/* <div className="col-md-3 mb-2 mb-md-0"> */}
              {/* </div> */}
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="input-form">
                <input type="text"
                  placeholder="Search Course"
                  aria-label="Search"
                  value={searchQuery}
                  className="form-control"
                  style={{ width: "300px" }}
                  onChange={(event) => setSearchQuery(event.target.value)} />
                {/* <button type="submit">Search</button> */}
              </form>

              <div className="profile-section ">
                {profile}{buttons}
              </div>
              {/* <div> */}
              {/* <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/secondMain" className="nav-link px-2 link-secondary">
                  Student Portal
                </Link>
              </li>
            </ul>
          </div>  */}
              {/* {localStorage.getItem('userName')} */}
              {/* {user!==null ? <Avatar /> : <LoginRegisterButton />} */}
              {/* Render SearchResults component if there are results */}
            </header>
          </div>
        </div>
      </div>



    </>
  );
}

export default NavBar;