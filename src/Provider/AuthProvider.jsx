import React, { createContext } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const detail = {
    name: "oasif",
    age: 22,
  };

  const authInfo = {
    detail,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
