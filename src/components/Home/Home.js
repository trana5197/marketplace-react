import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import BusinessOwner from "../BusinessOwner/BusinessOwner";
import SchoolAdmin from "../SchoolAdmin/SchoolAdmin";
import Student from "../Student/Student";
import SuperAdmin from "../SuperAdmin/SuperAdmin";
import HomePage from "./HomePage";

const Home = () => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const profile = authCtx.profile;
  // console.log(profile);
  // console.log(navigate);

  useEffect(() => {
    if (profile === "" || profile === null) {
      navigate("/", { replace: true });
    } else {
      navigate(`/${profile}`, { replace: true });
    }
  }, [navigate, profile]);

  let homePage;

  if (profile === "student") {
    homePage = (
      <Student
        firstName={authCtx.firstName}
        lastName={authCtx.lastName}
        email={authCtx.email}
        profile={authCtx.profile}
      />
    );
  } else if (profile === "business-owner") {
    homePage = (
      <BusinessOwner
        firstName={authCtx.firstName}
        lastName={authCtx.lastName}
        email={authCtx.email}
        profile={authCtx.profile}
      />
    );
  } else if (profile === "school-admin") {
    homePage = (
      <SchoolAdmin
        firstName={authCtx.firstName}
        lastName={authCtx.lastName}
        email={authCtx.email}
        profile={authCtx.profile}
      />
    );
  } else if (profile === "super-admin") {
    homePage = (
      <SuperAdmin
        firstName={authCtx.firstName}
        lastName={authCtx.lastName}
        email={authCtx.email}
        profile={authCtx.profile}
      />
    );
  } else {
    homePage = <HomePage />;
  }
  return <div>{homePage}</div>;
};

export default Home;
