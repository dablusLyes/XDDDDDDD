import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, addTodo] = useState([])
  const [text, setText] = useState('')
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
    "#FF33A8"
  ]

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const addToList = () => {
    addTodo([...todoList, text])
    setText('')
  }
  return (
    <>
      <h1>Today</h1>
      <input onChange={(e) => { setText(e.target.value) }} onKeyDown={(e) => { if (e.key === 'Enter') addToList() }} value={text} className='todoInput' type="text" />
      {todoList.map((el, id) => {
        return (
          <p key={id} className='todoElement' style={{ background: getRandomColor() }} >{el}</p>
        )
      })}
    </>
  )
}

export default App
