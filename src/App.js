import "./App";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Error from "./components/Error";
import Footer from "./components/Footer";
function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Buttons />} />
				<Route path="*" element={<Error />} />
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
