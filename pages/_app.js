import "../styles/globals.css";
import { Navbar } from "../components/navbar";

// Context providers
import AlertContext from "../context/AlertContext";
import UserContext from "../context/UserContext";
import AuthContext from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<AlertContext>
				<AuthContext>
					<UserContext>
						<Navbar />
						<Component {...pageProps} />
					</UserContext>
				</AuthContext>
			</AlertContext>
		</div>
	);
}

export default MyApp;
