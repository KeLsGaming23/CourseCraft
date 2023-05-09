import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SecondMain from "./components/SecondMain";
// import CourseOverview from "./components/pages/CourseOverview";
import LoginPage from "./components/pages/LoginPage";
import { MyProvider } from "./context/LoginContext";
import CoursePage from "./components/pages/CoursePage";
import LearningPage from "./components/pages/LearningPage";
import ProfilePage from "./components/pages/ProfilePage";
import { ProfileProvider } from "./context/ProfileContext";
import { CourseProvider } from "./context/CourseContext";
import NavBar from "./components/header/NavBar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ErrorPage from "./components/pages/ErrorPage";
import RegisterPage from "./components/pages/RegisterPage";
import NewCourse from "./components/pages/NewCourse";
import NewCourseCreated from "./components/pages/NewCourseCreated";
import CreateTopic from "./components/pages/CreateTopic";
import SearchResult from "./components/pages/SearchResult";
import StudentCourse from "./components/pages/StudentCourse";

function App() {
  const [user, setUser] = useState({});
  let token = localStorage.getItem('token');
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const response = await axios.get('http://127.0.0.1:8000/api/user', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log(response.data);
          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [token]);
  return (
    <div>
      <MyProvider>
        <ProfileProvider>
          <CourseProvider>
            <BrowserRouter>
              <NavBar setUser={setUser} />
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/secondMain' element={<SecondMain />} />
                <Route path='/loginPage' element={<LoginPage user={user} setUser={setUser} />} />
                <Route path='/registerPage' element={<RegisterPage user={user} setUser={setUser} />} />
                <Route path='/coursePage' element={<CoursePage />} />
                <Route path='/learningPage' element={<LearningPage />} />
                <Route path='/profilePage' element={<ProfilePage />} />
                <Route path='/newCourse' element={<NewCourse />} />
                <Route path='/newCourseCreated' element={<NewCourseCreated />} />
                <Route path='/createTopic' element={<CreateTopic />} />
                <Route path='/ErrorPage' element={<ErrorPage />} />
                <Route path="/search" element={<SearchResult />} />
                <Route path="/studentCourse" element={<StudentCourse />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </CourseProvider>
        </ProfileProvider>
      </MyProvider>
    </div>
  );
}

export default App;
