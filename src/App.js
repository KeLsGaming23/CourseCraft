import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SecondMain from "./components/SecondMain";
import CourseOverview from "./components/pages/CourseOverview";
import LoginPage from "./components/pages/LoginPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/secondMain' element={<SecondMain />} />
          <Route path='/loginPage' element={<LoginPage />} />
          <Route path='/courseOverview' element={<CourseOverview />} />
        </Routes>
        <Footer />
       
      </BrowserRouter>
    </div>
  );
}

export default App;
