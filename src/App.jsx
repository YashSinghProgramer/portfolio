import Portfolio from "./contant/portfolio.jsx";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Errorfile from "./contant/404/404error.jsx";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Portfolio />} />
			<Route path="*" element={<Errorfile />} />
		</Routes>
	);
}

export default App;
