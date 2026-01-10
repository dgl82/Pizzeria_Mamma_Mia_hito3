import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      {/* <RegisterPage></RegisterPage> */}
      <LoginPage></LoginPage>
      <Footer></Footer>
    </>
  );
}

export default App;
