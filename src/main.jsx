import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // Sirf iski zaroorat hai yahan

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
