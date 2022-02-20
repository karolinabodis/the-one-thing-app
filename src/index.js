import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import { SettingsProvider } from "./context/SettingsContext";

ReactDOM.render(
	<SettingsProvider>
		<App />
	</SettingsProvider>,
	document.getElementById("root")
);
