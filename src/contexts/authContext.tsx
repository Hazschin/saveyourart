"use client";

import { AuthData, UserRol } from "@/typeDef/typeDef";
import { createContext, useContext } from "react";

export const AuthContext = createContext({});

class AuthClass {
  isAuth?: boolean;
  userRol?: UserRol = "artist";

  constructor() {
    this.isAuth = true;
  }
}

export default function AuthProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const Auth = new AuthClass();
  return <AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthData => {
  const Auth = useContext(AuthContext);
  return Auth;
};
