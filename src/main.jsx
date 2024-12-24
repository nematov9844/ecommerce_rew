/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./theme/Theme.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</StrictMode>,
);
