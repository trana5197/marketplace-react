import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  signIn: (token) => {},
  signOut: () => {},
});

export default AuthContext;
