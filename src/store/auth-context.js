import React from "react";

const AuthContext = React.createContext({
  token: "",
  firstName: "",
  lastName: "",
  email: "",
  profile: "",
  isLoggedIn: false,
  signIn: (token) => {},
  signOut: () => {},
  setFirstName: (firstName) => {},
  setLastName: (lastName) => {},
  setEmail: () => {},
  setProfile: (profile) => {},
});

export default AuthContext;
