import React from "react";

// Create a Context object which comes with a Provider React component -> export in order to in useContext()
export const SettingsContext = React.createContext();

export function SettingsProvider(props) {
	// Set up variables: set Timer, set Timer Object with values, starts the Animation, set a Key Timer
	const [timer, setTimer] = React.useState(0);
	const [timerObject, setTimerObject] = React.useState({});
	const [startAnimate, setStartAnimate] = React.useState(false);
	const [key, setKey] = React.useState(0);

	// Create a newTimer that changes
	// active - which timer runs
	const [newTimer, setNewTimer] = React.useState({
		focusTime: 25,
		shortBreak: 5,
		longBreak: 20,
		active: "focusTime",
	});

	// Create a counter to keep track of elapsed Timer sessions
	let [counter, setNewCounter] = React.useState(0);

	function elapsedTimerAmount() {
		setNewCounter((prevCounter) => prevCounter + 1);
	}

	// Animation Settings
	function startTimer() {
		setStartAnimate(true);
		elapsedTimerAmount();
	}

	function pauseTimer() {
		setStartAnimate(false);
		setNewCounter(0);
	}

	function stopTimer() {
		setStartAnimate(false);
	}

	// Restart timer - change the key
	function restartTimer() {
		setKey((prevKey) => prevKey + 1);
		stopTimer();
	}

	// Create a SettingsButton - reset the App
	const SettingsButton = () => {
		setTimerObject({});
		stopTimer();
		setTimer(0);
	};

	// Set the Current Timer based on active state
	function setCurrentTimer(activeState) {
		updateExecute({
			...timerObject,
			active: activeState,
		});
		// Reset the Timer
		setActiveTimer(timerObject);
		stopTimer();
		restartTimer();
	}

	// Set a new Timer
	const updateExecute = (updatedObject) => {
		setTimerObject(updatedObject);
		setActiveTimer(updatedObject);
	};

	// Set the Time of the TimerButtons based on active state
	const setActiveTimer = (set) => {
		switch (set.active) {
			case "focusTime":
				setTimer(set.focusTime);
				break;
			case "shortBreak":
				setTimer(set.shortBreak);
				break;
			case "longBreak":
				setTimer(set.longBreak);
				break;
			default:
				setTimer(0);
		}
	};

	// Display the time in the center of the Timer
	// Format mm:ss (minutes and seconds) destructuring remainingTime
	const children = ({ remainingTime }) => {
		let minutes = Math.floor(remainingTime / 60);
		let seconds = remainingTime % 60;
		let unit = "";
		let text = "";

		if (minutes < 10) {
			minutes = `0${minutes}`;
		}

		if (seconds < 10) {
			seconds = `0${seconds}`;
		}

		if (minutes > 1) {
			unit = "minutes";
		} else if (minutes < 1) {
			unit = "seconds";
		} else {
			unit = "minute";
		}

		// <div role="timer" aria-live="assertive">
		// make the screen reader read the remaining time while the timer is running

		return (
			<div className="timer" aria-live="assertive">
				<div className="text">{text}</div>
				<div className="value">
					{minutes}:{seconds}
				</div>
				<div className="text">{unit}</div>
			</div>
		);
	};

	return (
		// wrap the entire App to become a child of this Component
		// values, functions become available throughout the App, destructure and use it
		<SettingsContext.Provider
			value={{
				timer,
				timerObject,
				startAnimate,
				key,
				newTimer,
				setNewTimer,
				startTimer,
				pauseTimer,
				stopTimer,
				elapsedTimerAmount,
				restartTimer,
				SettingsButton,
				setCurrentTimer,
				updateExecute,
				setNewCounter,
				children,
			}}
		>
			{props.children}
		</SettingsContext.Provider>
	);
}
