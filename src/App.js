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

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user');
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <div>
      <MyProvider>
        <ProfileProvider>
          <CourseProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/secondMain' element={<SecondMain />} />
                <Route path='/loginPage' element={<LoginPage user={user} setUser={setUser}/>} />
                <Route path='/coursePage' element={<CoursePage />} />
                <Route path='/learningPage' element={<LearningPage />} />
                <Route path='/profilePage' element={<ProfilePage />} />
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
