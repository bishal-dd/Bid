import "./App.css";
import HomeComp from "./components/HomeComp";
import NavComp from "./components/NavComp";
import AboutComp from "./components/AboutComp";
import LoginComp from "./components/authentication/LoginComp";
import SignupComp from "./components/authentication/SignupComp";
import DetailComp from "./components/DetailComp";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdditemComp from "./components/AdditemComp";
import Search from "./components/Search";
import LoadingScreen from "react-loading-screen";
import { useEffect, useState } from "react";
import ForgotPassword from "./components/ForgotPassword";
import Updateitem from "./components/Updateitem";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  /* CHangesssss dhhhhhhhhhhhhh jdddddddddddddddddd nnnnnnnnnnnn*/
  return (
    <LoadingScreen
      loading={loading}
      bgColor="#f2f2f2"
      spinnerColor="#07cbed"
      textColor="black"
      logoSrc="https://t4.ftcdn.net/jpg/04/83/17/69/360_F_483176994_Mvj1b9H2sKpq9T1xzoJy6CreJT7leHBL.jpg"
      text="To make a Difference"
    >
      <AuthProvider>
        <BrowserRouter>
          <NavComp />

          <Routes>
            <Route path="/" element={<HomeComp />} />
            <Route path="/about" element={<AboutComp />} />
            <Route path="/login" element={<LoginComp />} />
            <Route path="/signup" element={<SignupComp />} />
            <Route path="/detail/:id" element={<DetailComp />} />
            <Route path="/add" element={<AdditemComp />} />
            <Route path="/search/:id" element={<Search />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/edit" element={<Updateitem />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LoadingScreen>
  );
}

export default App;
