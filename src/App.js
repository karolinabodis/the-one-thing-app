import React from "react";
import Header from "./components/Header";
import Settings from "./components/Settings";
import CustomTimer from "./components/CustomTimer";
import Timer from "./components/Timer";
import TimerButtons from "./components/TimerButtons";
import { SettingsContext } from "./context/SettingsContext";
import Notification from "./components/Notification";

function App() {
	const {
		timer,
		startAnimate,
		children,
		updateExecute,
		timerObject,
		newTimer,
	} = React.useContext(SettingsContext);

	// function runs everytime when timerObject updates or startAnimate fires, counter changes
	React.useEffect(() => {
		updateExecute(timerObject, startAnimate);
	});

	// function runs once when the Component loads with default Timer values
	React.useEffect(() => {
		updateExecute(newTimer);
	}, []);

	// show Custom settings
	const [showEdit, setShowEdit] = React.useState(false);

	function showEditTimer() {
		setShowEdit((prevEdit) => !prevEdit);
	}

	function showApp() {
		if (timer === 0) {
			return <Settings />;
		} else if (showEdit) {
			return <CustomTimer handleClick={showEditTimer} />;
		} else {
			return (
				<div className="flex--container">
					<TimerButtons />
					<Timer
						timer={timer}
						animate={startAnimate}
						children={children}
						handleClick={showEditTimer}
					/>
				</div>
			);
		}
	}

	return (
		<main className="main__container">
			<Header />
			{showApp()}
			{startAnimate && <Notification />}
		</main>
	);
}

export default App;
