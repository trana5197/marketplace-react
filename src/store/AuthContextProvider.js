import { useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialFirstName = localStorage.getItem("firstName");
  const initialLastName = localStorage.getItem("lastName");
  const initialEmail = localStorage.getItem("email");
  const initialProfile = localStorage.getItem("profile");

  const [token, settoken] = useState(initialToken);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [email, setEmail] = useState(initialEmail);
  const [profile, setProfile] = useState(initialProfile);

  const isUserLoggedIn = !!token;

  const signInHandler = (token) => {
    settoken(token);
    localStorage.setItem("token", token);
  };

  const signOutHandler = () => {
    settoken(null);
    localStorage.clear();
  };

  const firstNameHandler = (firstName) => {
    setFirstName(firstName);
    localStorage.setItem("firstName", firstName);
  };

  const lastNameHandler = (lastName) => {
    setLastName(lastName);
    localStorage.setItem("lastName", lastName);
  };

  const emailHandler = (email) => {
    setEmail(email);
    localStorage.setItem("email", email);
  };

  const profileHandler = (profile) => {
    setProfile(profile);
    localStorage.setItem("profile", profile);
  };

  const contextValue = {
    token: token,
    firstName: firstName,
    lastName: lastName,
    email: email,
    profile: profile,
    isLoggedIn: isUserLoggedIn,
    signIn: signInHandler,
    signOut: signOutHandler,
    setFirstName: firstNameHandler,
    setLastName: lastNameHandler,
    setEmail: emailHandler,
    setProfile: profileHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
