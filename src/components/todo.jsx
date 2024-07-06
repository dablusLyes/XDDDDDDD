import React from "react";
const colors = [
	"#FF5733",
	"#FFBD33",
	"#75FF33",
	"#33FF57",
	"#33FFBD",
	"#33CFFF",
	"#3357FF",
	"#7533FF",
	"#BD33FF",
	"#FF33A8",
];
function Todo({ id, text, isDone }) {
	return (
		<>
			<div
				key={id}
				id={`todoElement${id}`}
				className={isDone ? "todoDone todoElement " : "todoElement "}
				style={{
					background: colors[id],
				}}
			>
				<p key={id}>{text}</p>
			</div>
		</>
	);
}

export default Todo;
