import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

import logo from "../../images/logo1.jpg";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const profileStudent = authCtx.profile === "student";
  const profileBusinessOwner = authCtx.profile === "business-owner";
  const profileSchoolAdmin = authCtx.profile === "school-admin";
  const profileSuperAdmin = authCtx.profile === "super-admin";

  const signOutHandler = () => {
    authCtx.signOut();
    authCtx.setProfile("");
  };

  return (
    <header className={classes.header}>
      <div className="margin-left">
        <img src={logo} alt="Logo of Marketplace" />
      </div>
      <nav className={`margin-right ${classes.nav}`}>
        <ul>
          <li>
            {!isLoggedIn && (
              <NavLink className={classes.link} to="/">
                Home
              </NavLink>
            )}
            {isLoggedIn && profileStudent && (
              <NavLink className={classes.link} to="/student">
                Student
              </NavLink>
            )}
            {isLoggedIn && profileBusinessOwner && (
              <NavLink className={classes.link} to="/business-owner">
                Business Owner
              </NavLink>
            )}
            {isLoggedIn && profileSchoolAdmin && (
              <NavLink className={classes.link} to="/school-admin">
                School Admin
              </NavLink>
            )}
            {isLoggedIn && profileSuperAdmin && (
              <NavLink className={classes.link} to="/super-admin">
                Super Admin
              </NavLink>
            )}
          </li>
          <li>Blog</li>
          <li>
            <NavLink className={classes.link} to="/service">
              Service
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink className={classes.link} to="/about">
                About
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink className={classes.link} to="/contact-us">
                Contact Us
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink className={classes.link} to="/sign-in">
                Sign In
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink className={classes.link} to="/create-account">
                Create Account
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                className={classes.link}
                to="/sign-in"
                onClick={signOutHandler}
              >
                Sign Out
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
