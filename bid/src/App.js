import "./App.css";
import HomeComp from "./components/HomeComp";
import NavComp from "./components/NavComp";
import AboutComp from "./components/AboutComp";
import LoginComp from "./components/authentication/LoginComp";
import SignupComp from "./components/authentication/SignupComp";
import DetailComp from "./components/DetailComp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdditemComp from "./components/AdditemComp";

function App() {
  return (
    <BrowserRouter>
      <NavComp />

      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/signup" element={<SignupComp />} />
        <Route path="/detail" element={<DetailComp />} />
        <Route path="/add" element={<AdditemComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
