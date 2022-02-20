import React from "react";
import { SettingsContext } from "../context/SettingsContext";
import Button from "./Button";

// labels -> buttons

export default function TimerButtons() {
	const { timerObject, setCurrentTimer } = React.useContext(SettingsContext);

	return (
		// Set the active-label class to focused Button and its time
		<div className="timer__buttons">
			<Button
				activeClass={
					timerObject.active === "focusTime"
						? "active--label settings--btn"
						: "settings--btn"
				}
				handleClick={() => setCurrentTimer("focusTime")}
				name={"Focus Time"}
			/>
			<Button
				activeClass={
					timerObject.active === "shortBreak"
						? "active--label settings--btn"
						: "settings--btn"
				}
				handleClick={() => setCurrentTimer("shortBreak")}
				name={"Short Break"}
			/>
			<Button
				activeClass={
					timerObject.active === "longBreak"
						? "active--label settings--btn"
						: "settings--btn"
				}
				handleClick={() => setCurrentTimer("longBreak")}
				name={"Long Break"}
			/>
		</div>
	);
}
