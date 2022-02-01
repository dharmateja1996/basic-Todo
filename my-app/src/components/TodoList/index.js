import React from 'react'
import './index.css'

const  TodoList = ({todoItem,onRemoveTodo}) => {
    
  
   const onDeleteButton = () => {
   
   onRemoveTodo(todoItem.id)
   }
  return (
    <li className='todo-item'>
        <p className='todo-item-name'>{todoItem.todoName}</p>
      <button className='delete-button' onClick={onDeleteButton}>Delete</button>
    </li>
  )
}

export default TodoList
