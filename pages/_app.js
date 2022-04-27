import "../styles/globals.css";

import Navbar from "../components/navbar";
import Alert from "../components/alert";

// Context providers
import {AlertContextProvider} from "../context/AlertContext";
import {AuthContextProvider} from "../context/AuthContext";
import {UserContextProvider} from "../context/UserContext";

function MyApp({Component, pageProps}) {
  return (
    <div>
      <AuthContextProvider>
        <UserContextProvider>
          <AlertContextProvider>
            {/* <Navbar /> */}
            <Alert />
            <Component {...pageProps} />
          </AlertContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default MyApp;
