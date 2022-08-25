import "../styles/globals.css";

import Alert from "../components/alert";
import Navbar from "../components/navbar";
// Context providers
import {AdminContextProvider} from "../context/AdminContext";
import {AlertContextProvider} from "../context/AlertContext";
import {AuthContextProvider} from "../context/AuthContext";
import {UserContextProvider} from "../context/UserContext";

function MyApp({Component, pageProps}) {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <AdminContextProvider>
          <AlertContextProvider>
            <Navbar />
            <div>
              <Alert />
              <Component {...pageProps} />
            </div>
          </AlertContextProvider>
        </AdminContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
