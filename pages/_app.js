import "../styles/globals.css";
import { Navbar } from "../components/navbar";

// Context providers
import AlertContext from "../context/AlertContext";
import UserContext from "../context/UserContext";
import AuthContext from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<AuthContext>
				<UserContext>
					<AlertContext>
						<Navbar />
						<Component {...pageProps} />
					</AlertContext>
				</UserContext>
			</AuthContext>
		</div>
	);
}

export default MyApp;
