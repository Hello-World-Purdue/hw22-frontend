import "../styles/globals.css";

import Alert from "../components/alert";
import Navbar from "../components/navbar";
import {AdminContextProvider} from "../context/AdminContext";
// Context providers
import {AlertContextProvider} from "../context/AlertContext";
import {AuthContextProvider} from "../context/AuthContext";
import {UserContextProvider} from "../context/UserContext";

function MyApp({Component, pageProps}) {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <AdminContextProvider>
          <AlertContextProvider>
            {/* <Navbar /> */}
            <Alert />
            <Component {...pageProps} />
          </AlertContextProvider>
        </AdminContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
