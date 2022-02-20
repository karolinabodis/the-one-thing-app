import React from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function Notification() {
	const { counter } = React.useContext(SettingsContext);

	function suffix() {
		if (counter === 0) {
			return "";
		} else if (counter === 1) {
			return "st";
		} else if (counter === 2) {
			return "nd";
		} else if (counter === 3) {
			return "rd";
		} else {
			return "th";
		}
	}

	return (
		<div className="alert">
			You have started your{" "}
			<span className="counter">
				{counter}
				{suffix()}
			</span>
			<span className="active--btn"> Focus Time</span>!
		</div>
	);
}
