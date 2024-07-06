import { useState, useRef, useEffect } from 'react'
import Todo from './components/todo';
import './App.css'
import Draggable, { DraggableCore } from "react-draggable";
function App() {
  const todoElement = useRef();
  const [todoList, setTodoList] = useState([{ text: 'zebi', isDone: false }])
  const [text, setText] = useState('')
  const [isDragged, setDragged] = useState(false)
  const [xOffset, setXOffset] = useState(0);
  const [enterPos, setEnterPos] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 });




  const addToList = () => {
    if (todoList.indexOf(text) === -1 && text !== '') {
      setTodoList([{ text: text, isDone: false }, ...todoList])
      setText('')
    }
  }

  function handleDrag(e, id) {
    console.log('zebiiii');
    if (isDragged) {
      if ((e.clientX - enterPos) > 30) {
        let changedEl = { text: todoList[id].text, isDone: true }
        setTodoList(todoList.splice(id, 1, changedEl))
      }
    }
  }
  const onMouseDown = (e) => { setDragged(true), setEnterPos(e.clientX), setXOffset(0) }
  const onMouseUp = () => { setDragged(false), setXOffset(0) }
  const onMouseOut = () => { setDragged(false), setXOffset(0) }
  return (
    <>
      <div className="head">
        <p className="title">🫵 Today</p>
      </div>
      <input onChange={(e) => { setText(e.target.value) }} placeholder='enter todo' onKeyDown={(e) => { if (e.key === 'Enter') addToList() }} value={text} className='todoInput' type="text" />
      {todoList.map((el, id) => {
        let idx = id
        return (
          <Draggable
            ref={todoElement}

            position={position}
            axis='x'
            onDrag={(e) => {
              handleDrag(e, idx)
            }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            key={id}
          >
            <Todo id={idx} text={el.text} isDone={el.isDone}></Todo>
          </Draggable>

        )
      })}
    </>
  )
}

export default App
