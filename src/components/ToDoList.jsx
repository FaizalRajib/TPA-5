import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../redux/action/toDoAction'


function ToDoList() {
  const dispatch = useDispatch()
  const [inputToDo, setInputTodo] = useState("")
  const todos = useSelector(state => state.todo.data)

    const handleSubmit = (e) => {
      e.preventDefault()
    }

    const handleChange = (e) => {
      setInputTodo(e.target.value)
    }

    const handleAdd_ToDo = () => {
      dispatch(addTodo(inputToDo))
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h2>To Do List</h2>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleAdd_ToDo}>Add</button>
        </form>

        <ul>
            {todos.map((items, index) => (
            <li key={index}>{items} <button>edit</button> <button onClick={() => dispatch(deleteTodo(items))}>delete</button></li>
          ))}
        </ul>
    </>
  )
}

export default ToDoList