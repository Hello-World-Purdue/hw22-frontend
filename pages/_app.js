import "../styles/globals.css";

import Navbar from "../components/navbar";
import Alert from "../components/alert";

// Context providers
import { AlertContextProvider } from "../context/AlertContext";
import { AuthContextProvider } from "../context/AuthContext";
import { UserContextProvider } from "../context/UserContext";
import { AdminContextProvider } from "../context/AdminContext";

function MyApp({ Component, pageProps }) {
	return (
		<div>
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
		</div>
	);
}

export default MyApp;
