import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from "./Button";
import { FaPlay, FaPause, FaUndo, FaEdit, FaCog } from "react-icons/fa";
import { SettingsContext } from "../context/SettingsContext";

export default function Timer(props) {
	const {
		key,
		stopTimer,
		elapsedTimerAmount,
		restartTimer,
		startTimer,
		pauseTimer,
		startAnimate,
		SettingsButton,
	} = React.useContext(SettingsContext);

	return (
		<div className="flex--container">
			<div className="timer__wrapper">
				<CountdownCircleTimer
					key={key}
					isPlaying={props.animate}
					duration={props.timer * 60}
					colors={["#36636D", "#549bab", "#fe716c", "#fe716c"]}
					colorsTime={[
						props.timer * 60,
						props.timer * 30,
						props.timer * 10,
						props.timer * 0,
					]}
					strokeWidth={6}
					size={190}
					trailColor="#1a1b21"
					onComplete={() => {
						stopTimer();
						elapsedTimerAmount();
					}}
				>
					{props.children}
				</CountdownCircleTimer>
			</div>
			<div className="button__wrapper">
				<Button
					activeClass={"restart--btn"}
					handleClick={restartTimer}
					name={<FaUndo />}
				/>

				<Button
					activeClass={startAnimate ? "active" : ""}
					handleClick={startTimer}
					name={<FaPlay />}
				/>

				<Button
					activeClass={!startAnimate ? "active" : ""}
					handleClick={pauseTimer}
					name={<FaPause />}
				/>

				<Button handleClick={SettingsButton} name={<FaCog />} />

				<Button handleClick={props.handleClick} name={<FaEdit />} />
			</div>
		</div>
	);
}
