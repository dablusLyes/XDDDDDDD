import { useState, useRef, useEffect } from 'react'
import Todo from './components/todo';
import './App.css'
function App() {
  const [todoList, setTodoList] = useState([{ text: '0', isDone: false }, { text: '1', isDone: false }, { text: '2', isDone: false }, { text: '3', isDone: false },])
  const [text, setText] = useState('')





  const addToList = () => {
    if (todoList.indexOf(text) === -1 && text !== '') {
      setTodoList([{ text: text, isDone: false }, ...todoList])
      setText('')
    }
  }

  return (
    <div>
      <div className="head">
        <p className="title">🫵 Today</p>
      </div>
      <input onChange={(e) => { setText(e.target.value) }} placeholder='+' onKeyDown={(e) => { if (e.key === 'Enter') addToList() }} value={text} className='todoInput' type="text" />
      {todoList.map((el, id) => {
        let idx = id
        return (
          <Todo key={id} todoList={todoList} setTodoList={setTodoList} id={idx} text={el.text} isDone={el.isDone}></Todo>
        )
      })}
    </div>
  )
}

export default App
