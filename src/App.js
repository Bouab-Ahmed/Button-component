import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buttons from "./pages/Buttons";
import Inputs from "./pages/Inputs";
import Error from "./components/Error";
function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Buttons />} />
				<Route path="/inputs" element={<Inputs />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
