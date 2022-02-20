import React from "react";

export default function Button(props) {
	return (
		<button className={props.activeClass} onClick={props.handleClick}>
			{props.name}
		</button>
	);
}
