import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import Forget from "./components/Forget/Forget";
import SignIn from "./components/SignIn/SignIn";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "Application/json";
axios.defaults.headers.post["Accept"] = "Application/json";

axios.defaults.withCredentials = true;

function App() {
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
