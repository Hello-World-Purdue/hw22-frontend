import {createContext, useContext} from "react";
import {Nullish} from "~/util/types";

/**
 * basic auth object
 *
 */
export interface Auth {
  email: string;
  name: string;
  // probably not needed?
  _isAdmin?: boolean;
}
export interface AuthContext {
  auth: Auth | Nullish;
  setAuth(auth: Auth | ((auth: Auth) => Auth)): void;
}

function isLoggedIn(maybeAuth?: Auth): boolean {
  if (maybeAuth == null) {
    return false;
  }
  const {name, email} = maybeAuth;
  return !!name && !!email;
}

export const AuthContext = createContext<AuthContext>({
  auth: null,
  setAuth: function () {
    throw new Error("Not implemented");
  },
});

export function useAuthState() {
  const {auth, setAuth} = useContext(AuthContext);
  return {
    isLoggedIn: isLoggedIn(),
    name: auth?.name,
    email: auth?.email,
    _isAdmin: auth?._isAdmin,
    setAuth,
  };
}
