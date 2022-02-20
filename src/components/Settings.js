import React from "react";
import { SettingsContext } from "../context/SettingsContext";
import Button from "./Button";

export default function Settings() {
	const { updateExecute, newTimer, setNewTimer } =
		React.useContext(SettingsContext);

	function handleChange(event) {
		const { name, value } = event.target;

		setNewTimer((prevTimer) => ({
			...prevTimer,
			[name]: value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();

		updateExecute(newTimer);
	}

	return (
		<div className="form__container">
			<form noValidate onSubmit={handleSubmit}>
				<div className="flex--container">
					<h2>Settings</h2>
					<div className="settings__input">
						<label htmlFor="focusTime">Focus Time</label>
						<input
							type="number"
							className="input"
							name="focusTime"
							id="focusTime"
							min="0"
							onChange={handleChange}
							value={newTimer.focusTime}
						/>
						<i className="fa-solid fa-circle-arrow-down"></i>
					</div>
					<div className="settings__input">
						<label htmlFor="shortBreak">Short Break</label>
						<input
							type="number"
							className="input"
							name="shortBreak"
							min="0"
							onChange={handleChange}
							value={newTimer.shortBreak}
						/>
					</div>
					<div className="settings__input">
						<label htmlFor="longBreak">Long Break</label>
						<input
							type="number"
							className="input"
							name="longBreak"
							min="0"
							onChange={handleChange}
							value={newTimer.longBreak}
						/>
					</div>
					<Button activeClass={"settings--btn save--btn"} name={"Save"} />
				</div>
			</form>
		</div>
	);
}
