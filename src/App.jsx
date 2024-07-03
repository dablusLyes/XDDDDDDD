import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

  const addToList = () => {
    addTodo([...todoList, text])
  }
  return (
    <>
      {todoList.map((el, id) => {
        return (
          <p key={id} className='todoElement' styles={{ 'background-color': colors[1] }} >{el}</p>
        )
      })}
      <input onChange={(e) => { setText(e.target.value) }} className='todoInput' type="text" />
      <button onClick={addToList} >add</button>
    </>
  )
}

export default App
