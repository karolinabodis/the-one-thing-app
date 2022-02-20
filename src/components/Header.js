import React from "react";

// Focusing Questions helps to fix the habits that really move your life forward.

export default function Header() {
	return (
		<header className="header flex--container">
			<h1>The One Thing Habit</h1>
			<input
				type="text"
				className="focus-question"
				name="focusQuestion"
				placeholder="what is your ONE thing?"
				required
			/>
		</header>
	);
}
