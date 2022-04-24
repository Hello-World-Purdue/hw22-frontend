import "../styles/globals.css";

import type {AppProps} from "next/app";
import {useState} from "react";
import {Auth, AuthContext} from "~/auth/context";

function MyApp({Component, pageProps}: AppProps) {
  const [auth, setAuth] = useState<Auth>();
  function _setAuth(next: Auth | ((auth: Auth | undefined) => Auth)): void {
    if (typeof next === "function") {
      next = next(auth);
    }
    setAuth(next);
  }
  return (
    <AuthContext.Provider value={{auth, setAuth: _setAuth}}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
