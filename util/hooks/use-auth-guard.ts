import AuthContext from "context/AuthContext";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";

export function useAlreadyLoggedInCheck() {
  const {push} = useRouter();
  let [ready, setReady] = useState(false);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    if (user != null) {
      push("/");
      return;
    }
    setReady(true);
  }, []);
  return ready;
}
