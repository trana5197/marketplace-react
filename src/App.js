import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Forget from "./components/Forget/Forget";
import SignIn from "./components/SignIn/SignIn";
import Footer from "./components/Home/Footer";
import axios from "axios";

import { useContext } from "react";
import AuthContext from "./store/auth-context";

axios.defaults.baseURL = "https://fantastic-shortbread-385603.netlify.app";
axios.defaults.headers.post["Content-Type"] = "Application/json";
axios.defaults.headers.post["Accept"] = "Application/json";

axios.defaults.withCredentials = true;

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const profileStudent = authCtx.profile === "student";
  const profileBusinessOwner = authCtx.profile === "business-owner";
  const profileSchoolAdmin = authCtx.profile === "school-admin";
  const profileSuperAdmin = authCtx.profile === "super-admin";

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-in/forget" element={<Forget />} />
          <Route path="/create-account" element={<CreateAccount />} />
          {isLoggedIn && profileStudent && (
            <Route path="/student" element={<Home />} />
          )}
          {isLoggedIn && profileBusinessOwner && (
            <Route path="/business-owner" element={<Home />} />
          )}
          {isLoggedIn && profileSchoolAdmin && (
            <Route path="/school-admin" element={<Home />} />
          )}
          {isLoggedIn && profileSuperAdmin && (
            <Route path="/super-admin" element={<Home />} />
          )}
          {/* <Route path="/products" element={<Home />} /> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
