import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SecondMain from "./components/SecondMain";
// import CourseOverview from "./components/pages/CourseOverview";
import LoginPage from "./components/pages/LoginPage";
import { MyProvider } from "./context/LoginContext";
import CoursePage from "./components/pages/CoursePage";


function App() {
  return (
    <div>
      <MyProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/secondMain' element={<SecondMain />} />
            <Route path='/loginPage' element={<LoginPage />} />
            <Route path='/coursePage' element={<CoursePage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
