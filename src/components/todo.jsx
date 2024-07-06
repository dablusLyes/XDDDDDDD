import { React, useEffect, useRef, useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import colors from "../../colors";





function Todo({ todoList, setTodoList, id, text, isDone }) {
	const todoElement = useRef();
	const [isDragged, setDragged] = useState(false)
	const [xOffset, setXOffset] = useState(0);
	const [enterPos, setEnterPos] = useState(0)
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [DragState, setDragState] = useState(null)
	const [DraggedElement, setDraggedElement] = useState(null)
	let offsetAction = 200

	function handleDrag(e, id) {

		if (isDragged) {
			if ((e.clientX - enterPos) > offsetAction) {
				if (!todoList[id].isDone) setDragState('checkTodo')
			} else if ((e.clientX - enterPos) < -offsetAction) {
				setDragState('delete')
			}
		}
	}

	const onMouseDown = (e) => { setDragged(true), setEnterPos(e.clientX), setXOffset(0) }
	const onMouseUp = (id) => {
		if (isDragged) {
			if (DragState == 'checkTodo') {
				console.log('Checking id: ', id);
				elementDone(id)
			} else if (DragState == 'delete') {
				deleteElement(id)
			}
			setDragged(false)
			setEnterPos(0)
			setDragState(null)
		}
	}
	const onMouseOut = () => { setDragged(false), setEnterPos(0) }

	function deleteElement(id) {
		let newTodoArr = [...todoList]
		newTodoArr.splice(id, 1)
		setTodoList(newTodoArr)
		setDragged(false)
	}

	function elementDone(id) {
		let changedEl = { text: todoList[id].text, isDone: true }
		let newTodoArr = [...todoList]
		newTodoArr.splice(id, 1)
		newTodoArr.push(changedEl)
		setTodoList(newTodoArr)
		setDragged(false)
	}
	let idx = id
	return (
		<>
			<Draggable

				position={position}
				axis='x'
				onStop={(id) => { onMouseUp(idx) }}
				onDrag={(e) => {
					handleDrag(e, idx)
				}}
				onStart={(e) => { onMouseDown(e), setDragged(true) }}
			>
				<div
					className={isDone ? "todoDone todoElement " : "todoElement "}
					id={`todoElement${id}`}
					style={isDone ? {
						background: 'rgb(57, 187, 96)',
					} : { background: colors[idx] }}
				>
					<p >{text}</p>
				</div>
			</Draggable>
		</>
	);
}

export default Todo;
