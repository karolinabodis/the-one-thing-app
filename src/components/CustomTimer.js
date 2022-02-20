import React from "react";
import Button from "./Button";
import { SettingsContext } from "../context/SettingsContext";

export default function CustomTimer(props) {
	const { updateExecute } = React.useContext(SettingsContext);

	const [newColor, setNewColor] = React.useState({
		mainColor: "#23252c",
		accentColor: "#fe716c",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setNewColor((prevColor) => ({
			...prevColor,
			[name]: value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();

		// updateExecute(newColor);
	}

	return (
		<div className="form__container">
			<form noValidate onSubmit={handleSubmit}>
				<div className="flex--container">
					<h2>Customize Your Timer</h2>
					<p>Change the colors</p>
					<div className="custom__input">
						<label htmlFor="mainColor">Main Color</label>
						<input
							type="color"
							className="input"
							name="mainColor"
							id="mainColor"
							onChange={handleChange}
							value={newColor.mainColor}
						/>
					</div>
					<div className="custom__input">
						<label htmlFor="accentColor">Accent Color</label>
						<input
							type="color"
							className="input"
							name="accentColor"
							id="accentColor"
							onChange={handleChange}
							value={newColor.accentColor}
						/>
					</div>
					{/* <p>Change the font</p> */}

					<Button
						activeClass={"settings--btn"}
						name={"Save"}
						handleClick={props.handleClick}
					/>
				</div>
			</form>
		</div>
	);
}
