import { useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const [token, settoken] = useState(null);

  const isUserLoggedIn = !!token;

  const signInHandler = (token) => {
    settoken(token);
  };

  const signOutHandler = () => {
    settoken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: isUserLoggedIn,
    signIn: signInHandler,
    signOut: signOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
